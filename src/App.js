import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
        {/*<Counter></Counter>*/}
        {<TodoApp></TodoApp>}
    </div>
  );
}

export default App;
