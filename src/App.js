import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Details } from './Components/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/products'} element={<Products/>} />
        <Route path={'/products/:id'} element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
