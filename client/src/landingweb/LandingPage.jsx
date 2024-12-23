import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./LandingPage.css";
import {useNavigate} from "react-router-dom";

const LandingPage=() =>{

    const navigate = useNavigate();
  const [modalOpen, setModalOpen ] = useState(false);
  const [modalOpenreg, setModalOpenreg ] = useState(false);

  const handleDonorLoginRedirect = () => {
    navigate('/donor_login')
  };

  const handleDonorRegisterRedirect = () => {
    navigate('/donor_register')
  };
 
  const handleNgoLoginRedirect = () => {
    navigate('/ngo_login')
  };

  const handleNgoRegisterRedirect = () => {
    navigate('/ngo_register')
  };

  const features = [
    {
      title: "Donation platform",
      image:
        "https://www.thelifeyoucansave.org/wp-content/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png", // Replace with actual image URL
    },
    {
      title: "Find NGO across the India",
      image:
        "https://www.blog.impaac.org/wp-content/uploads/2024/05/4-1024x1024.jpg", // Replace with actual image URL
    },
    {
      title: "Birthday Wishes and Do charity",
      image:
        "https://www.compassionuk.org/wp-content/uploads/2020/02/birthday-party-and-cake.jpg", // Replace with actual image URL
    },
    {
      title: "Schedules and plans visits to NGO",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQE2xWcEgr-RiQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687064872287?e=1734566400&v=beta&t=DnN4ZRfds7feBs74vlpfvsk2LVagM8Er0j-0rnBjFvU", // Replace with actual image URL
    },
    {
      title: "Join a Community",
      image:
        "https://i.pinimg.com/564x/fb/7f/33/fb7f338e8a6e6f8d7795b2ff23e75754.jpg", // Replace with actual image URL
    },
  ];
  const ngos = [
    {
      name: "Jan Kalyan Ashram",
      description: "Working for betterment of society and children.",
      location: "Aurangabad",
      image:
        "https://www.officeofsindhutai.org/assets/img/contact/sanmati-bal-niketan.jpg",
    },
    {
      name: "Seva Bharti",
      description: "Promoting education and healthcare in rural areas.",
      location: "Pune",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLE4qXPPhaDKvqwdLhPdB0_zXxT47HmCBSug&s",
    },
    {
      name: "Bal Sadan",
      description: "Providing shelter and food for the homeless.",
      location: "Mumbai",
      image:
        "https://www.officeofsindhutai.org/assets/img/contact/sanmati-bal-niketan.jpg",
    },
    {
      name: "Helping Hands",
      description:
        "Promoting healthcare, education and working for betterment of society ",
      location: "Mumbai",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLE4qXPPhaDKvqwdLhPdB0_zXxT47HmCBSug&s",
    },
    {
      name: "Ganesha Orphanage and Old House",
      description:
        "Helping poor to get quality of education, oppoetunity and shelter.",
      location: "Chhatrapati Sambhajinagar",
      image:
        "https://www.officeofsindhutai.org/assets/img/contact/sanmati-bal-niketan.jpg",
    },
  ];

  const [selectedNGO, setSelectedNGO] = useState(null);

  const handleView = (ngo) => {
    setSelectedNGO(ngo);
  };

  const closeModal = () => {
    setSelectedNGO(null);
  };

  return (
    <div>
      {/* Header section */}
      <header className="header">
        <div className="logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLr2cq-dXAY87k5jMfFjO75ldpZ4W4vn3PQ&s"
            alt="Logo"
            className="logo"
          />
          <h1>Caritas</h1>
        </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => setModalOpen(true)}>
            Login
          </button>
          <button
            className="register-button"
            onClick={() => setModalOpenreg(true)}
          >
            Register
          </button>
        </div>
      </header>

      {modalOpenreg && (
        <div className="modal-overlay" onClick={() => setModalOpenreg(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalOpenreg(false)}>
              &times;
            </button>
            <h2>Select an Option</h2>
            <button className="modal-btn" onClick={handleDonorRegisterRedirect}>
              As a User
            </button>
            <button className="modal-btn" onClick={handleNgoRegisterRedirect}>
              As a NGO
            </button>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalOpen(false)}>
              &times;
            </button>
            <h2>Select an Option</h2>
            <button className="modal-btn" onClick={handleDonorLoginRedirect}>
              As a User
            </button>
            <button className="modal-btn" onClick={handleNgoLoginRedirect}>
              As a NGO
            </button>
          </div>
        </div>
      )}

      {/* Quote Section with Changeable Image */}
      <section className="quote-section">
        <img
          src="https://www.dadabhagwan.org/media/1993/1-charity-benefits-of-charity.jpg"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagp1r5bS9_SrV7AeJcGG6ftRCAmDmDnTxdA&s"
          alt="Inspirational"
          className="quote-img"
        />
        <br />
        <blockquote>
          "The best way to find yourself is to lose yourself in the service of
          others." <br /> <br />" Helping Grows Your Faith And Blessing Gives
          You Power"
        </blockquote>
      </section>

      <section className="about-section" id="about">
        <div className="about-content">
          {/* Animated heading */}
          <h2 className="about-heading">
            Welcome to <span className="highlight">Caritas</span>
          </h2>

          {/* Text Section with animation */}
          <p className="about-text">
            At <span className="highlight">Caritas</span>, we believe that
            everyone can make a difference. We connect donors with NGOs to
            fulfill specific needs, empowering individuals to give during
            personal milestones. <br />
            Our platform connects users with NGOs and helps fulfill their needs.{" "}
            <br />
            <strong>Your Special Day - Birthday</strong> comes once a year, so
            why not celebrate it with the needy and receive their blessings?{" "}
            <br />
            <span className="highlight">Caritas</span> has successfully
            established secure transactions between users and NGOs.
          </p>
        </div>

        {/* Video Section with hover animation */}
        <div className="about-video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9A8ihv9nv60"
            className="react-player"
            playing={false} // Set to true if you want autoplay
            controls={true} // Show player controls
            width="600px"
            height="300px"
          />
        </div>
      </section>

      <section className="features-section" id="features">
        <h2 className="section-title">Features</h2>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-card-inner">
                <div className="feature-card-front">
                  <p className="feature-title-front">{feature.title}</p>
                </div>
                <div className="feature-card-back">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                  <p className="feature-title-back">{feature.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ngos-section">
        <h1 style={{ textAlign: "center" }}>Collaborated NGOs</h1>
        <div className="ngo-list">
          {ngos.map((ngo, index) => (
            <div className="ngo-card" key={index}>
              <div className="image-section">
                <img src={ngo.image} alt={ngo.name} />
                <span className="notification-dot"></span>
              </div>
              <div className="ngo-info">
                <h3>{ngo.name}</h3>
                <p>{ngo.description}</p>
                <p className="location">{ngo.location}</p>
                <button className="view-btn" onClick={() => handleView(ngo)}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Section */}
        {selectedNGO && (
          <div className="ngo-modal">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <img
                src={selectedNGO.image}
                alt={selectedNGO.name}
                className="modal-image"
              />
              <h2>{selectedNGO.name}</h2>
              <p>{selectedNGO.description}</p>
              <p className="modal-location">
                <strong>Location:</strong> {selectedNGO.location}
              </p>
              <button> Visit</button>
            </div>
          </div>
        )}
      </section>

      <footer className="g4g-footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <h2>Caritas</h2>
            <p>Empowering giving, transforming lives.</p>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <h2>Contact Us</h2>
            <ul className="footer-contact-info">
              <li>
                Call Us: <a href="tel:+911234567890">+91 12345 67890</a>
              </li>
              <li>
                Email: <a href="mailto:info@caritas.org">info@caritas.org</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:binarybrains03@gmail.com">
                  binarybrains03@gmail.com
                </a>
              </li>
            </ul>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Caritas. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
