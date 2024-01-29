import "./App.css";
import {Routes,Route} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="container">
       <Routes>
         <Route path="/" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
       </Routes>
    </div>
  );
}

export default App;
