import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <div className="about-logo">
            <span className="logo-text gradient-text">10Gen</span>
          </div>
          <h1 className="about-title">About 10Gen</h1>
          <p className="about-tagline">Building the future through innovative technology and generational thinking</p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-main">
            <div className="content-card">
              <div className="card-icon">🌟</div>
              <h2>Our Vision</h2>
              <p>
                At 10Gen, we believe in creating solutions that transcend generations. Our platform combines 
                cutting-edge technology with long-term vision to help individuals and families build lasting 
                legacies, preserve dreams, and secure their future.
              </p>
            </div>

            <div className="content-card">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                Founded on the principle of thinking 10 generations ahead, we develop tools and systems that 
                empower today's decisions to create tomorrow's prosperity. Every solution we build is designed 
                to have lasting impact across multiple generations.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h2 className="values-title">Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🔮</div>
                <h3>Generational Thinking</h3>
                <p>Every decision we make considers its impact on the next 10 generations.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We leverage cutting-edge technology to solve timeless human challenges.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🛡️</div>
                <h3>Security</h3>
                <p>Your legacy, dreams, and future are protected with enterprise-grade security.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Trust</h3>
                <p>Building lasting relationships through transparency and reliability.</p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="stats-section">
            <h2 className="stats-title">Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Generations Ahead</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Legacy Preservation</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Future Focused</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Vision, Many Solutions</div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="journey-section">
            <h2>The 10Gen Journey</h2>
            <div className="journey-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Today</h4>
                  <p>Empowering individuals and families with innovative legacy solutions</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Tomorrow</h4>
                  <p>Expanding our platform to serve communities and organizations worldwide</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>10 Generations</h4>
                  <p>Creating a world where every generation builds upon the wisdom of the past</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
