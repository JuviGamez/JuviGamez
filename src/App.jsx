import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Projects from './components/Projects'
import './App.css'

function Home() {
  return (
    <main>
      <div className="hero">
        <h1>Hey, I'm <span className="gradient-text">unkn1wn</span></h1>
        <p className="subtitle">A passionate developer who loves to code</p>
        <div className="cta-buttons">
          <Link to="/projects" className="button primary">View Projects</Link>
          <a href="" className="button">Option Coming Soon.....</a>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>💻 Coding</h3>
          <p>Sucks at coding but still tries making things</p>
        </div>
        <div className="feature-card">
          <h3>🎮 Gaming</h3>
          <p>Enjoying video games in my free time</p>
        </div>
        <div className="feature-card">
          <h3>🚀 AI</h3>
          <p>Always try's messing with AI and code</p>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <Router basename="/JuviGamez">
      <div id="app">
        <header>
          <nav>
            <div className="nav-content">
              <Link to="/" className="logo">unkn1wn</Link>
              <div className="nav-links">
                <Link to="/projects">Projects</Link>
                <a href="https://github.com/juvigamez" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
