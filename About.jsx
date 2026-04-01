import "./About.css";
import { Link } from "react-router-dom";
import directorPhoto from "../assets/director.jpg"; // replace with actual path
import { FaUserTie, FaUserGraduate, FaFutbol, FaUsers, FaChurch } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-page clay-page">

      {/* School Intro */}
      <div className="about-text clay-card">
        <h1>Welcome to OpenDoors International School</h1>
        <p>
          Inspiring young minds to learn, grow, and excel. Join a community
          where education meets creativity.
        </p>
        <div className="buttons">
          <Link to="/admissions">
            <button className="btn-primary">Enroll Now</button>
          </Link>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="staff-section">
        <h2>Our Leadership</h2>
        <div className="staff-cards">
          {/* Director */}
          <div className="staff-card clay-card">
            <img src={directorPhoto} alt="Director" className="staff-photo" />
            <h3>Mr. John Doe</h3>
            <p><strong>Director</strong></p>
            <p>
              With over 20 years of experience in education, Mr. John Doe is
              committed to fostering excellence, innovation, and discipline at
              OpenDoors Secondary School.
            </p>
          </div>

          {/* Principal */}
          <div className="staff-card clay-card">
            <FaUserTie size={80} color="#7b5cff" />
            <h3>Mrs. Jane Smith</h3>
            <p><strong>Principal</strong></p>
            <p>
              Oversees daily academic and administrative operations. Ensures curriculum delivery, staff support, and a safe, inspiring environment for students.
            </p>
          </div>

          {/* Vice Principal */}
          <div className="staff-card clay-card">
            <FaUserGraduate size={80} color="#7b5cff" />
            <h3>Mr. Tunde Adebayo</h3>
            <p><strong>Vice Principal</strong></p>
            <p>
              Supports the Principal in managing programs and student affairs. Maintains discipline, enhances student welfare, and implements innovative learning initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Prefects Section */}
      <section className="prefects-section">
        <h2>School Prefects</h2>
        <div className="prefects-cards">
          <div className="prefect-card clay-card">
            <FaUserGraduate size={60} color="#7b5cff" />
            <h3>Duke Ime Udoh</h3>
            <p><strong>Head Boy</strong></p>
            <p>
              Represents the student body, leads school events, motivates peers, and upholds the school’s values.
            </p>
          </div>

          <div className="prefect-card clay-card">
            <FaUsers size={60} color="#7b5cff" />
            <h3>Christene Eyakware</h3>
            <p><strong>Head Girl</strong></p>
            <p>
              Leads with integrity, responsibility, and kindness. Organizes student activities and ensures inclusion and support for all students.
            </p>
          </div>

          <div className="prefect-card clay-card">
            <FaFutbol size={60} color="#7b5cff" />
            <h3>David Okoye</h3>
            <p><strong>Sport Prefect</strong></p>
            <p>
              Promotes sports and physical education. Organizes competitions, training sessions, and encourages teamwork and school spirit.
            </p>
          </div>

          <div className="prefect-card clay-card">
            <FaUsers size={60} color="#7b5cff" />
            <h3>Onyinyechi Joel-Okoli</h3>
            <p><strong>Social Prefect</strong></p>
            <p>
              Coordinates social events and community engagement. Fosters a positive school culture and encourages collaboration among students.
            </p>
          </div>

          <div className="prefect-card clay-card">
            <FaChurch size={60} color="#7b5cff" />
            <h3>Emeka Eze</h3>
            <p><strong>Chapel Prefect</strong></p>
            <p>
              Leads spiritual and moral activities. Organizes chapel services, promotes ethical values, and supports character development among students.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}