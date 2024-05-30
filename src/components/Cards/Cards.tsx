import './Cards.css'
import { useState } from 'react';
import ModalComponent from '../Modal/Modal';

type CardsProps = {
    key: number;
    UUID: string;
    image: string;
    name: string;
    descricao: string;
};

function Cards(props: CardsProps) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
    };

    return (
        <>
        <div className='card'>
            <img className='image__Card' src={props.image} alt={props.name} />
            <div className='nome__preco'>
            <h1>{props.name}</h1>
            </div>
            <div className='descricao'>
            <p>{props.descricao}</p>
            </div>
            <div className='modal'>
                <button className='botao__modal' onClick={openModal}>Ver cotação</button>
                <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} uuid={props.UUID} />
            </div>
        </div>
        </>
    );
}

export default Cards;
