import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  AmimatedRoutes from "./components/Nav/AnimatedRoute";
import Navbar from "./components/Nav/Navbar";
import { Footer } from "./components/Nav/Footer";
function App() {
  return (
    // <div className="bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${fondofull})` }} >
    <div className="bg-cover bg-center bg-no-repeat bg-black"  >
        <Navbar />
        <Router>
          <AmimatedRoutes/>
        </Router>
        <Footer />
      
    </div>

  );
}

export default App;
