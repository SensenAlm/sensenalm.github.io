import React, { useState } from 'react'

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? data 
    : data.filter(project => filter === 'featured' ? project.featured : !project.featured)

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>My Projects</h2>
        <div className="project-filters">
          <button 
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('featured')}
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
          >
            Featured
          </button>
          <button 
            onClick={() => setFilter('other')}
            className={`filter-btn ${filter === 'other' ? 'active' : ''}`}
          >
            Others
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image">
              <img 
                src="https://via.placeholder.com/400x250/718096/ffffff?text=Project" 
                alt={project.title}
                loading="lazy"
              />
              {project.featured && <span className="featured-badge">⭐ Featured</span>}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  <span>📁</span> Code
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live"
                >
                  <span>🚀</span> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found for the selected filter.</p>
        </div>
      )}
    </div>
  )
}

export default Projects
