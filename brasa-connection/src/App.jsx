import './App.css'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Login from './LoginForm/login';
import Register from './RegisterForm/register';
import ProfilePage from './ProfilePage';
import Search from './Search';
import NavBar from './NavBar';
import Results from './ResultsFolder/Results';
function App() {

  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Search></Search>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profilepage" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="/results" element={<Results></Results>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}


export default App


