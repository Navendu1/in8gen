import React from 'react';

const DreamPreservationContent: React.FC = () => {
  return (
    <div>
      <h3>🌟 Dream Preservation & Fulfillment Platform</h3>
      <p>
        People often have dreams (education, business, social projects, innovations) that remain unfulfilled due to time, money, or circumstances.
        10Gen acts as a Dream Bank + Executor, preserving dreams and managing resources until they can be realized for the person, their descendants, or the community.
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <h4>🗄️ Dream Vault</h4>
          <ul>
            <li>Register personal dreams/goals securely</li>
            <li>Store with photos, videos, letters, voice notes</li>
            <li>Public, private, or legacy sharing options</li>
            <li>Create lasting dream legacy</li>
          </ul>
        </div>

        <div className="feature-card">
          <h4>💎 Dream Funding & Resource Pool</h4>
          <ul>
            <li>Contribute toward your own dreams</li>
            <li>Family/friends can donate to dreams</li>
            <li>Small contributions pooled until target reached</li>
            <li>10Gen invests and grows funds safely</li>
          </ul>
        </div>

        <div className="feature-card">
          <h4>✨ Dream Realization</h4>
          <ul>
            <li>Execute when conditions are met</li>
            <li>Pay for education, community centers</li>
            <li>Support startups and innovations</li>
            <li>Complete personal/social projects</li>
          </ul>
        </div>

        <div className="feature-card">
          <h4>🌐 Dream Impact Network</h4>
          <ul>
            <li>Dream Impact Wall (hall of fame)</li>
            <li>Beneficiary gratitude messages</li>
            <li>Forever remembered contributions</li>
            <li>Inspiration → funding → fulfillment cycle</li>
          </ul>
        </div>
      </div>

      <div className="example-box">
        <h4>Example Use Cases:</h4>
        <ul>
          <li><strong>Personal Dream:</strong> Teacher saves ₹10,000 for free library → Community pools funds → Library built in their name</li>
          <li><strong>Family Legacy:</strong> Father saves for daughter's MBA → Even after passing, 10Gen ensures funding when ready</li>
          <li><strong>Social Dream:</strong> Villager wants clean water project costing ₹1 crore → Contributes ₹2,000 → Project realized with pooled funds</li>
        </ul>
      </div>
    </div>
  );
};

export default DreamPreservationContent;
