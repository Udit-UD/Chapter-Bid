// import './App.css';
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
