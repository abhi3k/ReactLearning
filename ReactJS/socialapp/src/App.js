import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About'
import Home from './components/home/Home'
import Nbar from './components/Navbar'
import Contact from './components/Contact'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
