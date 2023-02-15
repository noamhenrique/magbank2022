import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import "./App.scss";

import posts from "./data/posts";
import CenteredButton from "./components/CenteredButton";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton>Abra sua conta</CenteredButton>
  </div>
);

export default App;
