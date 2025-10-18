import Hero from "../Components/Hero.jsx";
import Proj from "../Components/proj.jsx";
import Footer from "../Components/Footer.jsx";
export default function Home() {
  return (
    <div>
      <h1 className="title">Personal Portfolio</h1>
  
      <Hero />
      <Proj />
      <Footer />
    </div>
  );
}
