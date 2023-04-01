import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  /* Navigate, */
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

/* const PrivateRoute = ({ children, logged, ...rest }) => (
  <Route
    {...rest}
    render={() => (logged ? children : <Navigate to="./dashboard" />)}
  />
); */

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100);
    },
  };

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
        <Route path="/login" element={<Login auth={fakeAuth} />} />
        <Route
          path="/dashboard"
          logged={isLogged}
          element={<Dashboard name={name} account={account} />}
        >
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
