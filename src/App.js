import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  AmimatedRoutes from "./components/Nav/AnimatedRoute";
import Navbar from "./components/Nav/Navbar";
function App() {
  return (
    // <div className="bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${fondofull})` }} >
    <div className="bg-cover bg-center bg-no-repeat bg-black"  >
        <Navbar />
        <Router>
          <AmimatedRoutes/>
        </Router>
      
    </div>

  );
}

export default App;
