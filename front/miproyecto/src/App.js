import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './paginas/Home';
import { Contacto } from './paginas/Contacto';


function App() {
  return (
   
     <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
     </BrowserRouter>
  
  );
}

export default App;
