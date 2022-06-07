import './App.css';
import Child1 from './components/ChildComponent1'
import { ChildComponent2,ChildComponent3 } from './components/ChildComponent2'
import Child5 from './components/ChildComponent4'

const App = () => {
  return (
    <>
      <div className="App">
        Welcome To REACT.!!
        <br/>
        Learning is good.!
      </div>
      <div className="App">React is awesome.!</div>
      <Child1 />
      <ChildComponent2 />
      <ChildComponent3 />
      <Child5 />
    </>
  );
}

export default App;

/*
  Types of Components in React:
    - Class Based Components
    - Function Based Components
  
  - Components can be considered as sub-sections(small UI pieces) inside the entire application
  - Components return JSX (JavaScript + XML)
  - can have only one parent element (hence fragments are used)
  - Components can be nested
  - Components can be re-used
  - Components name should follow PascalCase naming convention

# Fragmemts (<> </>) - empty JSX tags for enclosing purpose (used for nesting multiple element inside a single parent to be returned by a component)



//-------------------------------------------------------//  
  # JSON - JavaScript Object Notation
  {
    name: 'abhishek',
    batch: 10
  }

  # XML - Extensible Markup Language
  <student> 
    <name>
      abhishek 
    </name>
    <batch>
     10
    </batch>
  </student>

*/
