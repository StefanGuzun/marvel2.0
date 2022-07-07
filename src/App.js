import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from"./routes/Home";
import NavBar from "./components/NavBar";
import HeroDetails from "./routes/HeroDetails";

function App(){
  return(
   <Router>
    <NavBar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={"/:id"} element={<HeroDetails/>}/>
      </Routes>
      <Footer/>
   </Router>
   );
  }

export default App;