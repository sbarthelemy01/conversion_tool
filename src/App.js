import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Currency from './components/currency/Currency';
import Length from './components/length/Length';
import Size from './components/size/Size';
import Speed from './components/speed/Speed';
import Temperature from './components/temp/Temp';
import Weight from './components/weight/Weight';


//routing all the paths/pages here
//source help: https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/

 function App() {
  return (
    <>
        <Router>
            <Routes>

              <Route 
                  path="/" 
                  element={<Home />} 
              />

              <Route
                  path="/currency"
                  element={<Currency />}
              />

              <Route
                  path="/length"
                  element={<Length />}
              />

              <Route
                  path="/size"
                  element={<Size />}
              />

              <Route
                  path="/speed"
                  element={<Speed />}
              />

              <Route
                  path="/temperature"
                  element={<Temperature />}
              />

              <Route
                  path="/weight"
                  element={<Weight />}
              />

            </Routes>
        </Router>
    </>
  );
}
 
export default App;