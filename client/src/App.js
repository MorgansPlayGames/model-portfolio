import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={AboutMe}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
