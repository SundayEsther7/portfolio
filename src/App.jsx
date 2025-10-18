import { Link, Outlet } from "react-router-dom";
import "./App.css"; 

export default function App() {
  return (
    <div>
      <nav>
        <img src="logo.png" alt="ES" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </nav>
        
      {/* Render the child routes */}
      <Outlet />
    </div>
  );
}
