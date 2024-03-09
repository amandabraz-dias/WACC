import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Login from './LoginForm/login';
import Register from './RegisterForm/register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
