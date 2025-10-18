export default function Hero() {
  return (
    <section className=" hero">
      <div className="hero-content">
        <p>Hi, my name is Esther!</p>
        <h1>I'm a developer</h1>
        <p>and I'm passionate about coding.</p>
        <p>
          I’m passionate about crafting modern, user-centered digital
          experiences. From responsive web apps to clean, engaging interfaces, I
          enjoy bringing ideas to life through code and design.
        </p>
      </div>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/logo-anime.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
