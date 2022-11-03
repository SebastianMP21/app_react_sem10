import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import pictures from './assets/pictures';

function App() {
  const [number, setNumber] = useState(0);
  
  return (  
    <div className="App">
      <div className='Header'><Header /></div>   
      
      <div className='Medio'>
        <div>
          <img className='yo' src={pictures.sebastian_mp} />
          <img className='hyelin' src={pictures.hyelin}/>
        </div>

        <h1>Este es mi primer componente</h1>
        <h2>El valor de number es: {number}</h2>
        <button type="button" className="btn btn-success btn-lg" onClick={() => setNumber(number + 1)}>Incrementar</button> 
        <button type="button" className="btn btn-danger btn-lg" onClick={() => setNumber(number - 1)}>Decrementar</button>
      </div>                
      <div className='Footer'>
        <Footer />
      </div> 
    </div>
  );
 }
  
 export default App;