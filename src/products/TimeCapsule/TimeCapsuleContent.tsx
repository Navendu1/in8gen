import React from 'react';

const TimeCapsuleContent: React.FC = () => {
  return (
    <div>
      <h3>⏰ Time Capsule</h3>
      <p>
        Capture today, unlock tomorrow. Preserve precious memories, important documents, and meaningful 
        content in digital time capsules that can be opened at specific future dates. Create lasting 
        connections between present and future generations.
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <h4>📅 Scheduled Content Release</h4>
          <ul>
            <li>Set specific dates for content unlocking</li>
            <li>Create milestone-based reveals</li>
            <li>Birthday and anniversary surprises</li>
            <li>Generational handover planning</li>
          </ul>
        </div>

        <div className="feature-card">
          <h4>� Multi-Media Preservation</h4>
          <ul>
            <li>Photos, videos, and audio recordings</li>
            <li>Digital documents and letters</li>
            <li>Voice messages and personal notes</li>
            <li>Interactive memory albums</li>
          </ul>
        </div>

        <div className="feature-card">
          <h4>🔐 Secure Encrypted Storage</h4>
          <ul>
            <li>Military-grade encryption protection</li>
            <li>Tamper-proof digital sealing</li>
            <li>Multi-factor authentication</li>
            <li>Backup and redundancy systems</li>
          </ul>
        </div>

        <div className="feature-card">
          <h4>👥 Collaborative Capsule Creation</h4>
          <ul>
            <li>Family and friend contributions</li>
            <li>Group memory projects</li>
            <li>Community time capsules</li>
            <li>Shared access permissions</li>
          </ul>
        </div>
      </div>

      <div className="example-box">
        <h4>Key Benefits:</h4>
        <ul>
          <li><strong>Memory Preservation:</strong> Keep precious moments safe forever</li>
          <li><strong>Future Surprises:</strong> Create anticipation and excitement</li>
          <li><strong>Emotional Connections:</strong> Bridge time gaps between generations</li>
          <li><strong>Legacy Building:</strong> Share life stories and wisdom</li>
        </ul>
      </div>

      <div className="example-box">
        <h4>Popular Use Cases:</h4>
        <ul>
          <li>Wedding time capsules for anniversary openings</li>
          <li>Baby's first year capsule for 18th birthday</li>
          <li>Graduation messages from family and friends</li>
          <li>Annual family traditions and milestones</li>
        </ul>
      </div>
    </div>
  );
};

export default TimeCapsuleContent;
