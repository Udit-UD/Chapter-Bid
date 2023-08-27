import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/SignUp";
import Home from "./Pages/Home";
import About from "./Pages/About"; 
import Contact from "./Pages/Contact";
import Trending from "./Pages/Trending";
import NavBar from "./Components/navBar";
import Login from "./Pages/Login";


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="trending" element={<Trending />} />      
    </Routes>
    </>
  );
}

export default App;
