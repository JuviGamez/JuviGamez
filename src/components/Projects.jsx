import { motion } from 'framer-motion'

const projects = [
  {
    title: "Arc Webpage Fullscreen Toggle",
    description: "This is a script that allows you to press CTRL + F11 to fullscreen a webpage, because when F11 is pressed on Arc Browser, it just hides the taskbar",
    tech: ["Javascript"],
    link: "https://github.com/JuviGamez/Arc_Browser_F11_Script/",
    image: "/JuviGamez/gifs/project1.gif" // Create a demo GIF showing the fullscreen toggle in action
  },
  {
    title: "Experiments for Better Discord",
    description: "Enable Access to Experiments & other dev-only features in Discord! Ported from Vencord to BetterDiscord!",
    tech: ["Javascript"],
    link: "https://github.com/JuviGamez/experiments-betterdiscord",
    image: "not-yet-added"
  },
  // Add more projects as needed
]

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">
        <span className="gradient-text">Some of My Projects</span>
      </h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-image">
              <motion.img 
                src={project.image} 
                alt={project.title}
                initial={{ filter: 'brightness(0.8)' }}
                whileHover={{ filter: 'brightness(1)' }}
                transition={{ duration: 0.3 }}
              />
              <div className="project-overlay">
                <span>View Demo</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="button primary">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects 
