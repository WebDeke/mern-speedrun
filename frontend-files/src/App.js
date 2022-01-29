import "./App.css";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import LandingPage from "./screens/LandingPage/LandingPage";
import HackerCentral from "./screens/HackerCentral/HackerCentral";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route exact path="/" component={LandingPage} />
      <Route path="/hackercentral" component={HackerCentral} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
