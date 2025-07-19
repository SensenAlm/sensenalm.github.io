import { useState } from 'react'
import './App.css'
import portfolioData from './data/portfolio.json'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Practicum from './components/Practicum'

function App() {
  const [activeTab, setActiveTab] = useState('about')
  const { personal } = portfolioData

  const tabs = [
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'practicum', label: 'Practicum', icon: '🎓' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <About data={portfolioData.about} personal={personal} />
      case 'projects':
        return <Projects data={portfolioData.projects} />
      case 'certifications':
        return <Certifications data={portfolioData.certifications} />
      case 'practicum':
        return <Practicum data={portfolioData.practicum} />
      default:
        return <About data={portfolioData.about} personal={personal} />
    }
  }

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="profile-section">
            <img 
              src="https://via.placeholder.com/80x80/4a5568/ffffff?text=TJ" 
              alt={personal.name}
              className="profile-image"
            />
            <div className="profile-info">
              <h1 className="name">{personal.name}</h1>
              <p className="title">{personal.title}</p>
            </div>
          </div>
          <div className="contact-links">
            <a href={`mailto:${personal.email}`} className="contact-link">📧</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-link">🐙</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">💼</a>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 {personal.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
