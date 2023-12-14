import './App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Add from "./pages/Add";
import User from "./pages/User";
import Edit from "./pages/Edit";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/return' element={<User/>} />
        <Route path='/edit/:_id' element={<Edit/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
