//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='rect'>
        <h1>Conversion Tool</h1>

        <div className='options'>
          <button onclick="currency()" id="curr" className="main-btn select">Currency</button>
          <br/> 
          <button className="main-btn select">Distance</button>
          <br/>
          <button className="main-btn select">Length</button>
          <br/>
          <button className="main-btn select">Size</button>
          <br/>
          <button className="main-btn select">Speed</button>
          <br/>
          <button className="main-btn select">Temperature</button>
          <br/>
          <button className="main-btn select">Weight</button>
          <br/>

        </div>
    </div>



  );
}

export default App;
