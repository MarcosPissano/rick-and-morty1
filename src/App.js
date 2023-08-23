import React from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Card from "./components/Card"; // Asegúrate de importar el componente Card
import characters, { Rick } from './data.js';

const AppContainer = styled.div`
  text-align: center;
  background-image: url('https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/07/114211-primer-juego-instagram-esta-basado-rick-morty.png?tf=1200x');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <h1>Rick and Morty Characters</h1> {/* Título agregado */}
      <Card
        id={Rick.id}
        name={Rick.name}
        status={Rick.status}
        species={Rick.species}
        gender={Rick.gender}
        origin={Rick.origin.name}
        image={Rick.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} /> {/* Utiliza el array characters */}
    </AppContainer>
  );
};

export default App;

