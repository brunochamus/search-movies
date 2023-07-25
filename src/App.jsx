import FormSearch from "./components/FormSearch/FormSearch"
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainPage from "./components/MainPage/MainPage"
import SingleMovie from "./components/SingleMovie/SingleMovie"


function App() {

  //http://www.omdbapi.com/?apikey=a615f5ed&s=

  //http://www.omdbapi.com/?apikey=a615f5ed&i=


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
