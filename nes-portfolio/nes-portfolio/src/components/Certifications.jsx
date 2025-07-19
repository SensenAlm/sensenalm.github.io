import React from 'react'

const Certifications = ({ data }) => {
  return (
    <div className="certifications-container">
      <div className="certifications-header">
        <h2>Certifications & Achievements</h2>
        <p>Professional certifications and achievements that validate my expertise</p>
      </div>

      <div className="certifications-grid">
        {data.map((cert) => (
          <div key={cert.id} className="certification-card">
            <div className="cert-image">
              <img 
                src="https://via.placeholder.com/200x150/718096/ffffff?text=CERT" 
                alt={cert.name}
                loading="lazy"
              />
            </div>
            
            <div className="cert-content">
              <h3>{cert.name}</h3>
              <div className="cert-details">
                <div className="cert-issuer">
                  <span className="label">Issued by:</span>
                  <span className="value">{cert.issuer}</span>
                </div>
                <div className="cert-date">
                  <span className="label">Date:</span>
                  <span className="value">{cert.date}</span>
                </div>
                <div className="cert-id">
                  <span className="label">Credential ID:</span>
                  <span className="value">{cert.credentialId}</span>
                </div>
              </div>
              
              <div className="cert-actions">
                <a 
                  href={cert.verificationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-btn"
                >
                  <span>✅</span> Verify Credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="certification-stats">
        <div className="stat-item">
          <span className="stat-number">{data.length}</span>
          <span className="stat-label">Total Certifications</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{new Set(data.map(cert => cert.issuer)).size}</span>
          <span className="stat-label">Different Providers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{new Date().getFullYear() - Math.min(...data.map(cert => parseInt(cert.date)))}</span>
          <span className="stat-label">Years of Learning</span>
        </div>
      </div>
    </div>
  )
}

export default Certifications
