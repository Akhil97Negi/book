import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import Home from './components/Home';
// import Home from "./components/home";



function App(){
  return (
    <div>
      <Routes>
        <Route path ="/" element ={<Navigate to ="login" />} />
        <Route path ="/login" element ={<Login />} />
        <Route path ="/register" element ={<Register />} />
        <Route path ="/home" element ={<Home />} />         
                 
      </Routes>
    </div>
  )
}

export default App