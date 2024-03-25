const tarefas = [
  { title: 'Limpar casa', id: 1 },
  { title: 'Lavar louça', id: 2 },
  { title: 'Dormir', id: 3 },
];
const listTarefas = tarefas.map(tarefas =>
  <li key={tarefas.id}>
    {tarefas.title}
  </li>
);
const App = () => {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <button>eu sou um botão html</button>
        <ul>{listTarefas}</ul>
      </div>
    );
  }
  
  export default App;
  