import React, { useState } from 'react';
import EbookReader from './ebook/EbookReader';

const LegacyForFutureGenerationContent: React.FC = () => {
  const [showEbook, setShowEbook] = useState(false);

  const handleOpenEbook = () => {
    setShowEbook(true);
  };

  const handleCloseEbook = () => {
    setShowEbook(false);
  };

  if (showEbook) {
    return <EbookReader onClose={handleCloseEbook} />;
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #111111, #222222)',
        borderRadius: '20px',
        border: '1px solid #333333',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #4CAF50, #81C784)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🏛️
        </div>
        <h1 style={{
          fontSize: '42px',
          fontWeight: '700',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #ffffff, #cccccc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.2'
        }}>
          Legacy for the Future Generation
        </h1>
        <p style={{
          fontSize: '20px',
          lineHeight: '1.6',
          color: '#e0e0e0',
          maxWidth: '800px',
          margin: '0 auto',
          fontWeight: '300'
        }}>
          Preserve your values, pass down your vision. In an ever-changing world, ensure that your most important 
          principles, wisdom, and life lessons are preserved and transmitted to future generations. Create a lasting 
          legacy that transcends time and material wealth.
        </p>
      </div>

      {/* Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '60px'
      }}>
        {/* Feature 1 */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid #333333',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(76, 175, 80, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>💎</div>
          <h3 style={{ 
            color: '#4CAF50', 
            marginBottom: '15px',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Generational Wealth
          </h3>
          <p style={{ color: '#cccccc', lineHeight: '1.6' }}>
            Build and preserve wealth that lasts for generations, ensuring your family's financial security for decades to come.
          </p>
        </div>

        {/* Feature 2 */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid #333333',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(76, 175, 80, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>📚</div>
          <h3 style={{ 
            color: '#4CAF50', 
            marginBottom: '15px',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Wisdom Preservation
          </h3>
          <p style={{ color: '#cccccc', lineHeight: '1.6' }}>
            Pass down your knowledge, values, and life lessons through structured legacy systems and digital time capsules.
          </p>
        </div>

        {/* Feature 3 */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid #333333',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(76, 175, 80, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>🔒</div>
          <h3 style={{ 
            color: '#4CAF50', 
            marginBottom: '15px',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Secure Legacy
          </h3>
          <p style={{ color: '#cccccc', lineHeight: '1.6' }}>
            Advanced security measures and smart contracts ensure your legacy is protected and distributed according to your wishes.
          </p>
        </div>
      </div>

      {/* E-book Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
        padding: '50px 40px',
        borderRadius: '20px',
        border: '2px solid #4CAF50',
        textAlign: 'center',
        boxShadow: '0 15px 40px rgba(76, 175, 80, 0.1)',
        marginBottom: '40px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ fontSize: '60px' }}>📖</div>
          <div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#4CAF50',
              marginBottom: '10px'
            }}>
              Educational Resources
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#e0e0e0',
              margin: '0',
              fontWeight: '300'
            }}>
              Learn about building generational wealth and creating lasting legacies
            </p>
          </div>
        </div>
        
        <button 
          onClick={handleOpenEbook}
          style={{
            background: 'linear-gradient(135deg, #4CAF50, #45a049)',
            color: 'white',
            padding: '20px 40px',
            border: 'none',
            borderRadius: '12px',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '15px',
            boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
            textDecoration: 'none'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(76, 175, 80, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.3)';
          }}
        >
          <span style={{ fontSize: '24px' }}>📚</span>
          Open E-book: Future Wealth & Legacy Preservation System
        </button>
        
        <div style={{
          marginTop: '25px',
          padding: '20px',
          background: 'rgba(76, 175, 80, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(76, 175, 80, 0.2)'
        }}>
          <p style={{ 
            fontSize: '16px', 
            color: '#81C784', 
            fontStyle: 'italic',
            margin: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <span>✨</span>
            Full-screen reading experience with premium dark theme for comfortable reading
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #333333'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '10px' }}>
            300+
          </div>
          <div style={{ color: '#cccccc', fontSize: '16px' }}>Years of Legacy</div>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #333333'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '10px' }}>
            10+
          </div>
          <div style={{ color: '#cccccc', fontSize: '16px' }}>Generations Secured</div>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #333333'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '10px' }}>
            24/7
          </div>
          <div style={{ color: '#cccccc', fontSize: '16px' }}>Secure Protection</div>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #333333'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '10px' }}>
            ∞
          </div>
          <div style={{ color: '#cccccc', fontSize: '16px' }}>Unlimited Growth</div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        textAlign: 'center',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #111111, #222222)',
        borderRadius: '15px',
        border: '1px solid #333333'
      }}>
        <h3 style={{
          fontSize: '28px',
          color: '#4CAF50',
          marginBottom: '15px',
          fontWeight: '600'
        }}>
          Ready to Build Your Legacy?
        </h3>
        <p style={{
          fontSize: '18px',
          color: '#e0e0e0',
          marginBottom: '0',
          lineHeight: '1.6'
        }}>
          Start your journey towards generational wealth and lasting impact today.
        </p>
      </div>
    </div>
  );
};

export default LegacyForFutureGenerationContent;
