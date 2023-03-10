import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from "./views/Home";
import Login from "./views/Login";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route path="/">
          <Route
            index
            element={<Home handleClick={() => setShowModal(true)}></Home>}
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </BrowserRouter>
  );
};

export default App;
