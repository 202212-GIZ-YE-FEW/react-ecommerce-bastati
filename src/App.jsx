import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage'
function App() {
  return (
    <div classNameName="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
