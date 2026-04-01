import Hero from "../components/Hero";
import Card from "../components/Card";

import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <Hero />

      {/* SUBJECTS / COURSES SECTION */}
      <section className="courses-section">
        <h2>Our Subjects</h2>
        <p>We offer a wide range of subjects to prepare students for WAEC, NECO, and beyond.</p>

        <div className="courses-grid">
          <Card title="Sciences" desc="Physics, Chemistry, Biology, and Basic Science." />
          <Card title="Arts & Humanities" desc="Literature, Government, History, CRS." />
          <Card title="Commercial Studies" desc="Accounting, Commerce, Economics, Business Studies." />
          <Card title="Technology & ICT" desc="Computer Studies, ICT, and Introductory Technology." />
          <Card title="Languages" desc="English Language, Yoruba/Igbo/Hausa, French." />
          <Card title="Vocational Studies" desc="Home Economics, Agriculture, Technical Skills." />
        </div>

        <div className="courses-cta">
          <Link to="/courses" className="view-all-btn">View All Subjects</Link>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="features-section">
        <h2>Why Learn With Us</h2>
        <p>We provide a nurturing environment with practical learning and expert guidance.</p>

        <div className="features-grid">
          <div className="feature-card">Hands-on Projects</div>
          <div className="feature-card">Expert Instructors</div>
          <div className="feature-card">Flexible Learning</div>
          <div className="feature-card">Holistic Development</div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <h2>Ready to Join?</h2>
        <p>Start your journey with Open Doors International School today.</p>
        <div className="hero-buttons">
          <Link to="/admissions"><button className="primary">Apply Now</button></Link>
          <Link to="/about"><button className="secondary">Learn More</button></Link>
        </div>
      </section>

    </div>
  );
}

export default Home;