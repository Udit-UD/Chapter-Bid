import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { ProductPage } from "./Pages/ProductPage";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
          <Route path ="/" element={<Home/>} />
          <Route path="/productPage" element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
