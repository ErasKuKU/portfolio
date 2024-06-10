import {
  BrowserRouter, Routes, Route, 
} from 'react-router-dom';
import "./App.css"
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Resume from "./routes/Resume"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
