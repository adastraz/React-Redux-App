import React from 'react';
import StarWars from './components/StarWars'
import styled from 'styled-components'

const Pretty = styled.div `
display: flex;
padding: 5%;
justify-content:center;
align-items:center;
margin: 5% 0;
flex-direction:column;
`

function App() {
  return (
    <div className="App">
      <Pretty>
        <h1>Rick and Morty Characters / Locations / Episodes</h1>
        <StarWars />
      </Pretty>
    </div>
  );
}

export default App;
