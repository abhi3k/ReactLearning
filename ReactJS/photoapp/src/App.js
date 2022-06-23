import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About'
import Photo from './components/photos/Photo'
import Nbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nbar />
        <Routes>
          <Route path="/" element={<Photo />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
