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
// (o que fizeste na aula 2).
const cards = [
  { name: "Recursive", type: "Killer", health: 2009, stamina: 110 },
  { name: "Ethan", type: "Survivor", health: 4, stamina: 100 },
  { name: "Gab", type: "Survivor", health: 7, stamina: 100 },
  { name: "Fanti", type: "Survivor", health: 4, stamina: 100 },
  { name: "\"You\"", type: "Survivor", health: 4, stamina: 100 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
    </main>
  );
}

export default App;
