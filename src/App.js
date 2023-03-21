import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route path="/">
          <Route
            index
            element={<Home handleClick={() => setShowModal(true)}></Home>}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" />
          <Route path="payments" />
          <Route path="history" />
        </Route>
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
};

export default App;
