// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server

import { useState } from "react";
import Card from "./Card"; 

// (o que fizeste na aula 2).
const cards = [
  { name: "Recursive", type: "Killer", health: 2009, stamina: 110 },
  { name: "Ethan", type: "Survivor", health: 120, stamina: 100 },
  { name: "Gab", type: "Survivor", health: 60, stamina: 100 },
  { name: "Fanti", type: "Survivor", health: 90, stamina: 100 },
  { name: "\"You\"", type: "Survivor", health: 100, stamina: 100 },
];



function App() {

  const [filter, setFilter] = useState("All");
  const [cardName, setCardName] = useState("");

  const filteredCards = cards.filter((card) => {
    const matchesType =
      filter === "All" || card.type === filter;

    const matchesName =
      card.name.toLowerCase().includes(cardName.toLowerCase());

    return matchesType && matchesName;
  });

  return (
    <main>
      <h1>My collection</h1>
      
      <br />
        <p>I have {filteredCards.length} cards!</p>
      <br />

      <button onClick={() => (setFilter("All"))}> 
        All
      </button>
      <button onClick={() => (setFilter("Survivor"))}> 
        Survivors
      </button>
      <button onClick={() => (setFilter("Killer"))}> 
        Killers
      </button>

      <input type="text" placeholder="Card name goes here..." value={cardName} onChange={(event) => setCardName(event.target.value)}/>
    
      <ul>
        
          {filteredCards.map((card) => 
            <Card key={card.name} {...card}></Card>
          )}
     
      </ul>

    </main>
  );
}

export default App;


