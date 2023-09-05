// import './App.css';
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
