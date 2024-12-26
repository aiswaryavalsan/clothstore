import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    
    <div>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}/>
        <Route path='/shop' element={<Shop></Shop>}/>
      </Routes>
   
      
    </div>
    </>
  );
}

export default App;
