import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'
import Photo from './components/photos/Photo'
import Nbar from './components/Navbar'
import Contact from './components/Contact'
import Enlarged from './components/Enlarged'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nbar />
        <Routes>
          <Route path="/" element={<Photo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/photos/:id" element={<Enlarged />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
