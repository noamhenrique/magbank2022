import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenteredButton from "./components/CenteredButton";
import Institutional from "./components/Institutional";
import Faq from "./components/Faq";
import "./App.scss";
import Footer from "./components/Footer";

import posts from "./data/posts";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton>Abra sua conta</CenteredButton>

    <Institutional />
    <Faq />
    <Footer />
  </div>
);

export default App;
