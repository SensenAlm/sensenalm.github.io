import React, { useState } from 'react'

const Practicum = ({ data }) => {
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <div className="practicum-container">
      <div className="practicum-header">
        <h2>Practicum & Training</h2>
        <p>Hands-on learning experiences and intensive training programs</p>
      </div>

      <div className="practicum-timeline">
        {data.map((item, index) => (
          <div key={item.id} className="practicum-item">
            <div className="timeline-marker">
              <span className="marker-number">{index + 1}</span>
            </div>
            
            <div className="practicum-card">
              <div className="card-header" onClick={() => toggleExpanded(item.id)}>
                <div className="header-content">
                  <h3>{item.title}</h3>
                  <div className="institution-info">
                    <span className="institution">{item.institution}</span>
                    <span className="duration">{item.duration}</span>
                  </div>
                </div>
                <button 
                  className="expand-btn"
                  aria-label={expandedItem === item.id ? 'Collapse details' : 'Expand details'}
                  aria-expanded={expandedItem === item.id}
                >
                  {expandedItem === item.id ? '−' : '+'}
                </button>
              </div>

              <div className={`card-content ${expandedItem === item.id ? 'expanded' : ''}`}>
                <p className="description">{item.description}</p>
                
                <div className="skills-learned">
                  <h4>Skills Acquired:</h4>
                  <div className="skill-tags">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects-completed">
                  <h4>Key Projects:</h4>
                  <ul>
                    {item.projects.map((project, projectIndex) => (
                      <li key={projectIndex}>{project}</li>
                    ))}
                  </ul>
                </div>

                <div className="certificate-section">
                  <img 
                    src="https://via.placeholder.com/300x200/4a5568/ffffff?text=Certificate" 
                    alt={`${item.title} Certificate`}
                    className="certificate-image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="practicum-summary">
        <h3>Training Summary</h3>
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-value">{data.length}</span>
            <span className="stat-label">Training Programs</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {data.reduce((total, item) => {
                const months = item.duration.match(/(\d+)\s*months?/i)
                return total + (months ? parseInt(months[1]) : 0)
              }, 0)}
            </span>
            <span className="stat-label">Months of Training</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {data.reduce((total, item) => total + item.projects.length, 0)}
            </span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {new Set(data.flatMap(item => item.skills)).size}
            </span>
            <span className="stat-label">Technologies Learned</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practicum
