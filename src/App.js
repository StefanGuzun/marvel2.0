import './App.css';
import React from "react";
import HeroDetails from "./routes/HeroDetails";
import {BrowserRouter as Routes, Route, Router} from "react-router-dom";
import Homes from "./routes/Homes";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="container">
      <Router>
          <NavBar/>
              <Routes>
                  <Route path ={"/"} element={<Homes/>}/>
                  <Route path ={"/:id"} element={<HeroDetails/>}/>
              </Routes>
      </Router>
    </div>
  );
}

export default App;
