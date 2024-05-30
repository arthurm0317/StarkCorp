import React, { ChangeEventHandler } from 'react';

interface QuantidadeProps {
  className?: string;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const QuantidadeCripto: React.FC<QuantidadeProps> = (props) => {
  return (
    <form className="input__valor" onSubmit={(e) => e.preventDefault()}>
      <input
        type="number"
        placeholder="Quantidade de criptomoeda"
        value={props.value}
        onChange={props.onChange}
        className="search__input"
        required
      />
    </form>
  );
};

export default QuantidadeCripto;