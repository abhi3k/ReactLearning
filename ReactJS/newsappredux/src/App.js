import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComp from './components/Navbar'
import NewsList from './components/newsList/NewsList'
import SingleNews from './components/SingleNews'
import Count from './components/Count'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import store from './redux/store.js'
import { Provider } from 'react-redux'

const App = () => {

  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=8a26143a071a43bc88ee8ec4f6685126&country=in")
        setNewsList(res.data.articles)
      } catch (err) {
        console.error(err)
      }
    }
    fetchNews()
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComp />
        <Routes>
          <Route path="/" element={<NewsList newsList={newsList} />}></Route>
          <Route path="/news/:id" element={<SingleNews newsList={newsList} />}></Route>
          <Route path="/count" element={<Count newsList={newsList} />}></Route>
        </Routes>
        <NewsList />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
