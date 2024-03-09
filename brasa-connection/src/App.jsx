import './Search.css'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Login from './LoginForm/login';
import Register from './RegisterForm/register';
import ProfilePage from './ProfilePage';
import Search from './Search';
function App() {

  return (
    <>
      
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Search></Search>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profilepage" element={<ProfilePage></ProfilePage>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}


export default App


