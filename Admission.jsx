import { useState } from "react";
import "./Admission.css";
import { FaWhatsapp } from "react-icons/fa";

function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentClass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${formData.name} to ${formData.studentClass}!`);
    setFormData({ name: "", email: "", phone: "", studentClass: "" });
  };

  const whatsappNumber = "2347049597698";
  const whatsappMessage = "Hello! I want to inquire about admissions.";

  return (
    <div className="admission-page">

      <h2>Admission</h2>
      <p>Join Opendoors International School today!</p>

      {/* ===== Split Layout Container ===== */}
      <div className="admission-container">

        {/* Left: Content */}
        <div className="admission-content">
          <div className="admission-info">
            <h3>Welcome to Our Admissions</h3>
            <p>
              We are delighted that you are considering Opendoors International  School 
              for your child’s education. We are committed to academic excellence, discipline, 
              and all-round student development.
            </p>
          </div>

          <div className="admission-info">
            <h3>Why Choose Us</h3>
            <ul>
              <li>Qualified and experienced teachers</li>
              <li>Modern learning facilities</li>
              <li>Strong academic track record</li>
              <li>Safe and supportive environment</li>
              <li>Focus on discipline and leadership</li>
            </ul>
          </div>

          <div className="admission-info">
            <h3>Classes Available</h3>
            <ul>
              <li>Creche</li>
              <li>Pre-Nusery</li>
              <li>Nusery (Nusery 1 – 3)</li>
              <li>Primary School (Primary 1 – 6)</li>
              <li>Junior Secondary School (JSS 1 – 3)</li>
              <li>Senior Secondary School (SSS 1 – 3)</li>
            </ul>
          </div>

          <div className="admission-info">
            <h3>Admission Requirements</h3>
            <ul>
              <li>Completed application form</li>
              <li>Copy of birth certificate</li>
              <li>Recent passport photographs</li>
              <li>Last school report/result</li>
              <li>Entrance examination (if required)</li>
            </ul>
          </div>

          <div className="admission-info">
            <h3>Admission Process</h3>
            <ol>
              <li>Fill out the application form</li>
              <li>Submit required documents</li>
              <li>Attend entrance exam/interview</li>
              <li>Receive admission confirmation</li>
              <li>Complete payment and enrollment</li>
            </ol>
          </div>

          <div className="admission-info">
            <h3>School Fees</h3>
            <p>
              Our fees are affordable and structured to provide quality education. 
              Kindly contact us via WhatsApp for a full breakdown.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="admission-form">
          <form className="form-card" onSubmit={handleSubmit}>
            <h3>Student Registration</h3>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+234..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Class Applying For</label>
              <select
                name="studentClass"
                value={formData.studentClass}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                <optgroup label="Kindergarten / Nursery">
                  <option value="Kindergarten">Creche</option>
                  <option value="Kindergarten">Pre-Nusery</option>
                  <option value="Nursery 1">Nursery 1</option>
                  <option value="Nursery 2">Nursery 2</option>
                </optgroup>
                <optgroup label="Primary School">
                  <option value="Primary 1">Primary 1</option>
                  <option value="Primary 2">Primary 2</option>
                  <option value="Primary 3">Primary 3</option>
                  <option value="Primary 4">Primary 4</option>
                  <option value="Primary 5">Primary 5</option>
                  <option value="Primary 6">Primary 6</option>
                </optgroup>
                <optgroup label="Junior Secondary School">
                  <option value="JSS 1">JSS 1</option>
                  <option value="JSS 2">JSS 2</option>
                  <option value="JSS 3">JSS 3</option>
                </optgroup>
                <optgroup label="Senior Secondary School">
                  <option value="SSS 1">SSS 1</option>
                  <option value="SSS 2">SSS 2</option>
                  <option value="SSS 3">SSS 3</option>
                </optgroup>
              </select>
            </div>

            <button type="submit">Apply Now</button>
          </form>
        </div>

      </div>

      {/* ===== WhatsApp Section ===== */}
      <div className="whatsapp-contact">
        <p>Have questions? Contact us on WhatsApp!</p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Send a Message
        </a>
      </div>
    </div>
  );
}

export default Admission;