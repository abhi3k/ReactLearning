import './App.css';
import Hello from './component/Hello'
import HelloClass from './component/HelloClass'

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloClass />
    </div>
  );
}

export default App;


/*
  Class based components - can use state and props
  Function based components - props ( could not have its own state)

  with the coming of 'Hooks' -> create state is function based component
*/
