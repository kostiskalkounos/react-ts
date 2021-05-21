import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Cool beans"), new Todo("Sure")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
