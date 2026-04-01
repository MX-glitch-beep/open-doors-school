import { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const [students, setStudents] = useState(0);
  const [examSuccess, setExamSuccess] = useState(0);
  const [teachers, setTeachers] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;

    const studentTarget = 350;
    const examTarget = 98;
    const teacherTarget = 35;

    let s = 0, e = 0, t = 0;

    const counter = setInterval(() => {
      if (s < studentTarget)
        s += Math.ceil(studentTarget / (duration / interval));
      if (e < examTarget)
        e += Math.ceil(examTarget / (duration / interval));
      if (t < teacherTarget)
        t += Math.ceil(teacherTarget / (duration / interval));

      setStudents(s > studentTarget ? studentTarget : s);
      setExamSuccess(e > examTarget ? examTarget : e);
      setTeachers(t > teacherTarget ? teacherTarget : t);

      if (s >= studentTarget && e >= examTarget && t >= teacherTarget) {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        
        {/* LEFT SIDE */}
        <div className="hero-text">
          <h1>
            Open Doors International School
          </h1>

          <p className="subtitle">
            A leading secondary school in Lagos focused on academic excellence,
            discipline, and raising future leaders.
          </p>

          <div className="hero-buttons">
            <Link to="/admissions">
              <button className="primary">Apply Now</button>
            </Link>

            <Link to="/about">
              <button className="secondary">Learn More</button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="hero-image">
          <img src="student.jpg" alt="Students" />
        </div>

      </div>

      {/* STATS SECTION (BELOW HERO LIKE MODERN TEMPLATES) */}
      <div className="hero-stats">
        <div className="stat-card">
          <h3>{students}+</h3>
          <p>Students Enrolled</p>
        </div>

        <div className="stat-card">
          <h3>{examSuccess}%</h3>
          <p>WAEC/NECO Success</p>
        </div>

        <div className="stat-card">
          <h3>{teachers}+</h3>
          <p>Qualified Teachers</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;