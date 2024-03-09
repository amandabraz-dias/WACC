import './App.css'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Login from './LoginForm/login';
import Register from './RegisterForm/register';

function App() {

  return (
    <>
      <body class="background-overlay">
      <div id="search">
        <img src="images/logoPlusName.png" alt="Logo" id="main-logo"/>
        <br />
        <input id="search-bar" placeholder="Search course or internship..." />
      </div>
      </body>
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


