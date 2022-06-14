import './App.css';
// import Hello from './component/Hello'
// import HelloClass from './component/HelloClass'
// import  Counter from './component/Counter'
import RenderUsingLoop from './component/RenderUsingLoop'

function App() {
  return (
    <div className="App">
      {/* <Hello student1="Abhishek" student2="Another Student" />
      <Hello student1="Abhishek" />
      <HelloClass student1="Some" student2="Sunil"/>
      <HelloClass student1="Some1" /> */}
      {/* <Counter /> */}
      <RenderUsingLoop />
    </div>
  );
}

export default App;


/*
  Class based components - can use state and props
      - overhead use of 'this' keyword

  Function based components - props ( could not have its own state)
        - simple syntax
        - no 'this' keyword dependency

  # with the coming of 'Hooks' -> create state is function based component

  Component re-renders whenever there is a change in either :
  1. State : data which is private/specific to a single component
  2. Props : data sent from parent component  to child component

*/
