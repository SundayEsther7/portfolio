export default function Projects() {
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
      <p className="hero-content">
         Here’s a collection of projects I’ve built — blending creativity and clean code to bring ideas to life.<br />
 Each project you’ll see below helped me grow as a developer and designer.<br />
 From front-end experiments to full web apps — I love turning ideas into interactive experiences.<br />
        </p>
        <br />
      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a><br />
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
