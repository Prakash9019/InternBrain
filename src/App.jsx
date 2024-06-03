import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp'
import Page from './Components/Page';


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<Page />} />
      </Routes>
      
      </BrowserRouter>
  )
}

export default App
