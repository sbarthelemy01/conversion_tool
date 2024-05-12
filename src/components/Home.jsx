import React from "react";
import { useNavigate } from "react-router-dom";

//import { Link } from "react-router-dom";
//import './App.css';


function Home() {
  const navigate = useNavigate();
  return (
    <div className='rect'>
        <h1>Conversion Tool</h1>

        {/* Redirect on button click
            source help:https://www.webrecto.com/react/navigate-to-another-page-on-button-click-in-react
                        https://simplefrontend.com/redirect-to-another-page-in-react/#Redirect_to_another_page_on_button_click
        */}
        <div className='options'>
          <button onClick={() => navigate("/currency")} className="main-btn select">Currency</button>
          <br/> 
          <button onClick={() => navigate("/distance")} className="main-btn select">Distance</button>
          <br/>
          <button onClick={() => navigate("/length")} className="main-btn select">Length</button>
          <br/>
          <button onClick={() => navigate("/size")} className="main-btn select">Size</button>
          <br/>
          <button onClick={() => navigate("/speed")} className="main-btn select">Speed</button>
          <br/>
          <button onClick={() => navigate("/temperature")} className="main-btn select">Temperature</button>
          <br/>
          <button onClick={() => navigate("/weight")} className="main-btn select">Weight</button>
          <br/>

        </div>
    </div>



  );
}

export default Home;
