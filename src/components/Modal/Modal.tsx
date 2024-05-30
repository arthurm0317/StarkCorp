import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';
import Converter from '../../API/converter';
import precoDolar from '../../API/dolarPrice';
import { CoinData } from '../../API/types';
import QuantidadeCripto from '../QuantidadeCripto/QuantidadeCripto';

interface ModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  uuid: string;
}

Modal.setAppElement('#root');

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onRequestClose, uuid }) => {
  const [quantidade, setQuantidade] = useState<number>(1);
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  const [calculatedValue, setCalculatedValue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const [coin, dolar] = await Promise.all([Converter(uuid), precoDolar()]);
        setCoinData(coin);
        
        const usdToBrlRate = parseFloat(dolar.ask);
        const convertedPrice = parseFloat(coin.price) * usdToBrlRate * quantidade;
        setCalculatedValue(convertedPrice);
        setError(null);
      } catch (error) {
        console.error('Erro ao buscar dados da moeda:', error);
        setError('Erro ao buscar dados da moeda. Por favor, tente novamente.');
      }
    };

    if (isOpen) {
      fetchCoinData();
    }
  }, [isOpen, uuid, quantidade]);

  const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantidade(parseFloat(e.target.value) || 0);
  };

  return (
    <Modal
      className="modal__custom"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Informações da Moeda"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <div className="custom__content">
        <h1>Informações da Moeda</h1>
        {error ? (
          <p>{error}</p>
        ) : coinData ? (
          <div className="coin__data">
            <p>Símbolo: {coinData.symbol}</p>
            <p>Nome: {coinData.name}</p>
            
            <QuantidadeCripto
              className="barra__input"
              value={quantidade}
              onChange={handleQuantidadeChange}
            />

            <p>Preço em dólar: U${parseFloat(coinData.price).toFixed(2)}</p>
            {calculatedValue !== null && (
              <p>Preço Convertido: R${calculatedValue.toFixed(2)}</p>
            )}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
        <button onClick={onRequestClose}>Voltar</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;