import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComp from './components/Navbar'
import NewsList from './components/newsList/NewsList'
import SingleNews from './components/SingleNews'
import Count from './components/Count'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import store from './redux/store.js'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComp />
        <Routes>
          <Route path="/" element={<NewsList/>}></Route>
          <Route path="/news/:id" element={<SingleNews/>}></Route>
          <Route path="/count" element={<Count/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
