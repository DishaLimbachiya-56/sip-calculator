import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SipGuide from "./components/SipGuide";
import Benefits from "./components/Benefits";
import About from "./components/About";
import NotFound from "./components/NotFound";
function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/guide" element={<SipGuide/>}/>
    <Route path="/benefit" element={<Benefits/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}
  
export default App;