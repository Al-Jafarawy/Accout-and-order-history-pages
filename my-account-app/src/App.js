import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import MyAccount from "./MyAccount";
import OrderHistory from "./OrderHistory";
import ToggleTheme from "./ToggleTheme";

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center", color: 'white', marginTop: "20px", backgroundColor: '#205760', padding: '20px', marginBottom: '20px' }}>
          Welcome to Your Account
        </h1>

        <ToggleTheme />

        <nav style={navStyle}>
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
            My Account
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
            Order History
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<MyAccount />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

const navStyle = {
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};


export default App;
