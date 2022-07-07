import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from"./routes/Home";
import NavBar from "./components/NavBar";
import HeroDetails from "./routes/HeroDetails";
import "./App.css"

function App(){
  return(
   <div className="home-page">
   <Router>
    <NavBar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={"/:id"} element={<HeroDetails/>}/>
      </Routes>
   </Router>
   </div>
   );
  }

export default App;