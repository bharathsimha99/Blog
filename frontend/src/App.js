import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Task from './Component/Task';
import AddTask from './Component/AddTask';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
        <Route path='/addTask' element={<AddTask/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
