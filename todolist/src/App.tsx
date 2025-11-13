import './App.css';
import TodoList from './Todolist';
import Clock from './Timer';

function App() {
  let name = '랙';

  return (
    <div className='container'>
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}

export default App;
