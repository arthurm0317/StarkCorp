import "./index.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import { useState } from "react";
import { Data } from "./Data";
import SearchBar from "./components/SearchBar/SearchBar";




function App() {
  const [Busca, setBusca] = useState('');

  const cards = Data.filter((items) => {
    return Busca.toLowerCase() === '' ? items : items.name.toLowerCase().includes(Busca.toLowerCase());
  }).map(items => (
    <Cards
      key={items.id}
      UUID={items.UUID}
      image={items.image}
      name={items.name}
      descricao={items.descricao}
    />
  ));

  return (
    <>
      <Header />
      <SearchBar
        className="search__bar"
        value={Busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className="cards">
        {cards}
      </div>
    </>
  );
}

export default App;
