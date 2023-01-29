import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Auth />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
