export default function Proj() {
  const projectData = [
    
    {
      id: 2,
      title: "Weather Forecast App",
      description: "A React-based app that displays real-time weather data using OpenWeather API.",
      image: "/weather.png",
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      title: "Landing Page Design",
      description: "A modern responsive landing page built with HTML, CSS, and JavaScript.",
      image: "/images/landing-page.png",
      demo: "#",
      code: "#",
    },
    {
      id: 4,
      title: "To-Do List App",
      description: "A simple and user-friendly to-do list app built with React.",
      image: "/images/to-do-list.png",
      demo: "#",
      code: "#",
    },
    {
      id: 5,
      title: "Calculator",
      description: "A basic calculator application built with JavaScript, HTML, and CSS.",
      image: "/calculator.png",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p>
          Here are some of my favorite projects — each one reflects my passion
          for clean design, creative coding, and bringing ideas to life through
          web development.
        </p>
      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
