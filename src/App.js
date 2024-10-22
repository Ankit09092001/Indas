// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
import Home from './Home/Navbar';
// import Menu from './Menu/Menu';
import Gallery from "./Gallery/Home";
import About from "./About/Home";
import Vegetables from './Products/vegetables';
import Fruits from './Products/fruits';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/menu" element={<Menu />} /> Added leading slash */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
