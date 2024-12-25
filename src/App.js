import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}/>
        <Route path='/shop' element={<Shop></Shop>}/>
      </Routes>
   
      
    </div>
  );
}

export default App;
