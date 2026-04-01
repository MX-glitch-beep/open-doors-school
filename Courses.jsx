import Card from "../components/Card";
import "./Courses.css";
import { FiCpu, FiBook, FiGlobe, FiActivity, FiMonitor, FiPenTool, FiBarChart, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div className="courses-page clay-page">

     {/* Breadcrumb Navigation */}
<nav className="breadcrumb">
  <Link to="/">Home</Link>
  <span className="separator"> &gt; </span>
  <span>Subjects</span>
</nav>

      {/* Page Header */}
      <h2>Our Subjects</h2>
      <p>
        Explore the wide range of subjects we offer at Opendoors International Secondary School.
        Each subject is designed to prepare students for WAEC and NECO examinations.
      </p>

      {/* Learning Highlights Section */}
      <section className="learning-highlights">
        <h3>Learning Highlights</h3>
        <ul>
          <li>Experienced and supportive teachers</li>
          <li>Hands-on practical sessions in Science & Computer labs</li>
          <li>Strong focus on STEM and creative arts</li>
          <li>Extracurricular programs and competitions</li>
        </ul>
      </section>

      {/* Subjects Grid */}
      <div className="courses-grid">
        <Card title="Mathematics" desc="Building strong analytical and problem-solving skills." Icon={FiActivity} />
        <Card title="Science" desc="Physics, Chemistry, Biology and Basic Science." Icon={FiCpu} />
        <Card title="English Language" desc="Enhancing communication, reading comprehension and writing skills." Icon={FiBook} />
        <Card title="Arts & Humanities" desc="History, Literature, Government, Civic Education and CRS." Icon={FiGlobe} />
        <Card title="Computer Science" desc="Computer Studies, ICT, Programming and Digital Literacy." Icon={FiMonitor} />
        <Card title="Design & Technology" desc="Practical design skills and innovative thinking." Icon={FiPenTool} />
        <Card title="Business Studies" desc="Entrepreneurship, Economics, Accounting basics." Icon={FiBarChart} />
        <Card title="Life Skills" desc="Leadership, communication, and personal development." Icon={FiBriefcase} />
      </div>

      {/* Why Choose Our School */}
      <section className="why-choose">
        <h3>Why Choose Opendoors?</h3>
        <p>
          We combine academic excellence with holistic student development. Our programs are tailored
          to create confident, knowledgeable, and socially responsible students ready for the challenges of the 21st century.
        </p>
      </section>
    </div>
  );
}

export default Courses