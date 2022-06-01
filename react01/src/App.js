import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        Welcome To REACT.!!
      </div>
      <div className="App">React is awesome.!</div>
    </>
  );
}

export default App;

/*
  Types of Components in React:
    - Class Based Components
    - Function Based Components
  
  - Components can be considered as sub-sections inside the entire application
  - Components return JSX (JavaScript + XML)
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
