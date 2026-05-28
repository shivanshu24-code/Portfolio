import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const techStack = [
  {
    name: 'React',
    accent: 'react-accent',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="4.5" fill="currentColor" />
        <ellipse cx="32" cy="32" rx="22" ry="9" />
        <ellipse cx="32" cy="32" rx="22" ry="9" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="22" ry="9" transform="rotate(120 32 32)" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    accent: 'node-accent',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 6 53 18v28L32 58 11 46V18Z" />
        <path d="M25 24v16" />
        <path d="M25 24c4-2.5 10-1 10 4.5S29 36 25 40" />
        <path d="M38 24v16" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    accent: 'js-accent',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="10" width="44" height="44" rx="10" />
        <path d="M27 23v18c0 4-2.2 6-6.3 6" />
        <path d="M39 24c2.8 0 5 1.5 6.2 4" />
        <path d="M45.2 28c0 11-14.2 5-14.2 13 0 3.2 2.5 5 6.4 5 3.5 0 5.8-1.2 7.1-3.7" />
      </svg>
    ),
  },
  {
    name: 'Python',
    accent: 'python-accent',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 12c-11 0-10 5.2-10 10v6h20v4H18c-6 0-10 4.5-10 11 0 6 3.5 11 10 11h6v-8c0-6 5.2-10 11-10h18c5.4 0 9-4.6 9-10V22c0-5.7-4.8-10-10-10Z" />
        <circle cx="27" cy="19" r="2" fill="currentColor" />
        <path d="M32 52c11 0 10-5.2 10-10v-6H22v-4h24c6 0 10-4.5 10-11 0-6-3.5-11-10-11h-6v8c0 6-5.2 10-11 10H11c-5.4 0-9 4.6-9 10v4c0 5.7 4.8 10 10 10Z" transform="translate(6 0)" />
        <circle cx="37" cy="45" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'C++',
    accent: 'cpp-accent',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M24 13 10 21v16l14 8 14-8V21Z" />
        <path d="M39 22h10" />
        <path d="M44 17v10" />
        <path d="M49 22h10" />
        <path d="M54 17v10" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    accent: 'mongo-accent',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 10c5 6 8 14.5 8 24 0 12-5 19-8 20-3-1-8-8-8-20 0-9.5 3-18 8-24Z" />
        <path d="M32 14v38" />
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    accent: 'tailwind-accent',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 24c4-6 8-8 14-8 9 0 10 6 14 8 3 1.5 6 1 10-2-4 6-8 8-14 8-9 0-10-6-14-8-3-1.5-6-1-10 2Z" />
        <path d="M8 40c4-6 8-8 14-8 9 0 10 6 14 8 3 1.5 6 1 10-2-4 6-8 8-14 8-9 0-10-6-14-8-3-1.5-6-1-10 2Z" />
      </svg>
    ),
  },
]

const flowingTechStack = [...techStack, ...techStack]

const projectShowcase = [
  {
    id: 'sign-language',
    label: 'Project 1',
    title: 'Sign Language Recognition System',
    subtitle: 'Python, OpenCV, Machine Learning',
    author: 'Shivanshu Vats',
    summary:
      'An AI-driven recognition system designed to understand hand gestures and improve sign language communication.',
    stack: ['Python', 'OpenCV', 'Machine Learning', 'Yolov11', 'React'],
    details: [
      'Developed an AI-based system to recognize hand gestures for sign language communication.',
      'Implemented image preprocessing and feature extraction using OpenCV.',
      'Trained and evaluated machine learning models for gesture classification.',
      'Built a web interface using react for real-time sign recognition.',
      'Addressed challenges such as lighting variation and hand orientation.',
    ],
    Github: 'https://github.com/shivanshu24-code/Sign-Language-Detector'
  },
  {
    id: 'sehat-connect',
    label: 'Project 2',
    title: 'Sehat Connect - Healthcare AI Chatbot',
    subtitle: 'Python, Llama LLM, NLP',
    author: 'Shivanshu Vats and Naitik Tiwari',
    summary:
      'A Smart India Hackathon healthcare assistant focused on structured health guidance with privacy-aware AI responses.',
    stack: ['Python', 'Llama LLM', 'NLP', 'Prompt Engineering', 'Conversational AI'],
    details: [
      'Developed an AI-powered healthcare chatbot as part of a Smart India Hackathon project.',
      'Integrated a Llama-based large language model to provide health-related guidance and responses.',
      'Designed conversation flows to handle user health queries in a structured and user-friendly manner.',
      'Implemented prompt engineering techniques to improve response accuracy and relevance.',
      'Focused on data privacy and safe handling of health-related information.',
    ],
        Github: 'https://github.com/shivanshu24-code/Sehat-Connect'
  },
  {
    id: 'amigo',
    label: 'Project 3',
    title: 'Amigo - Campus Networking Platform',
    subtitle: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB',
  author: 'Shivanshu Vats and Naitik Tiwari',
    summary:
      'A next-generation campus networking platform built exclusively for Bennett University students to connect, collaborate, and communicate in one secure digital ecosystem.',
    stack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'Socket.IO',
      'WebRTC',
      'End-to-End Encryption',
    ],
    details: [
      'Built a private student-only campus networking platform designed specifically for Bennett University.',
      'Enabled social networking features including post creation, sharing, likes, comments, and community interaction.',
      'Added campus event discovery and announcement features to keep students updated on university activities.',
      'Implemented real-time chat for instant and secure student communication.',
      'Integrated high-quality encrypted video calling for collaboration and social interaction.',
      'Focused on privacy and platform security with secure authentication and end-to-end encryption.',
      'Designed the platform vision around stronger student connectivity, collaboration, and communication.',
    ],
        Github: 'https://github.com/shivanshu24-code/Amigo'
  },
  {
    id: 'stocklite',
    label: 'Project 4',
    title: 'StockLite - AI Stock Analysis System',
    subtitle: 'React, Node.js, FastAPI, LLaMA, ChromaDB',
    author: 'Shivanshu Vats',
    summary:
      'An AI-driven stock analysis system that combines technical indicators, real-time news through a RAG pipeline, and LLM-based reasoning to explain what to buy and why.',
    stack: [
      'React',
      'Node.js',
      'Express',
      'FastAPI',
      'Python',
      'LLaMA',
      'Sentence Transformers',
      'ChromaDB',
      'yFinance',
      'Finnhub',
      'NewsAPI',
    ],
    details: [
      'Built an Opportunity Engine that analyzes RSI, MACD, MA50, and MA200 to generate BUY, SELL, or HOLD recommendations.',
      'Added confidence scoring, risk level detection, and a custom Opportunity Score to rank stocks.',
      'Created a RAG-based news intelligence pipeline using Finnhub, NewsAPI or NewsData, and yFinance.',
      'Implemented news cleaning, chunking, embeddings, and vector retrieval for relevant stock context.',
      'Integrated LLaMA-based reasoning to combine technical indicators and retrieved news into human-like explanations.',
      'Designed a hybrid AI flow where the Opportunity Engine decides what to buy and the RAG plus LLM layer explains why.',
      'Structured the system with a React frontend, Node.js API layer, and a FastAPI Python AI service using ChromaDB for vector search.',
    ],
        Github: 'https://github.com/shivanshu24-code/Stocklite'
  },
  {
    id: 'cervix-cancer',
    label: 'Research Paper',
    title: 'CERVIX Cancer Detection',
    subtitle: 'Machine Learning, Medical Imaging, Research',
    author: 'Shallu Sharma and Shivanshu Vats',
    summary:
      'An ongoing research effort focused on detecting and classifying stages of cervical cancer through machine learning.',
    stack: ['Machine Learning', 'Dataset Curation', 'Feature Selection', 'CNN', 'Transformers'],
    details: [
      'Working on a machine learning-based system to detect and classify stages of cervical cancer.',
      'Curated and filtered an open-source medical dataset to improve data quality and class balance.',
      'Performed data preprocessing and feature selection for model training.',
      'Collaborating with faculty on model evaluation and research documentation.',
    ],
        Github: 'https://github.com/shivanshu24-code/Cervical-Cancer-Detection-Model-Final-Model'
  },
]

function Mainpage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [activeProject, setActiveProject] = useState(null)

  const toggleProject = (projectId) => {
    setActiveProject((currentProject) =>
      currentProject === projectId ? null : projectId,
    )
  }

  const showPreviousProject = () => {
    setCurrentProjectIndex((currentIndex) =>
      currentIndex === 0 ? projectShowcase.length - 1 : currentIndex - 1,
    )
  }

  const showNextProject = () => {
    setCurrentProjectIndex((currentIndex) =>
      currentIndex === projectShowcase.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-content">
        <section className="hero-panel" id="home">
          <div className="hero-intro">
            <div className="avatar-slot" aria-label="Avatar placeholder">
              <img src="/gibli.png" alt="Profile avatar" className="avatar-image" />
            </div>
            <p className="eyebrow hero-status">Open To Jobs And Internships</p>
          </div>
          <p className="hero-greeting">
            Hey there! I&apos;m <span className="hero-name">Shivanshu Vats</span>
          </p>
          <div className="hero-text-block">
            <h1>Full Stack Developer crafting AI-powered web experiences.</h1>
            <p className="hero-copy">
              Crafting modern web experiences with AI, creativity and clean code.
            </p>
            <a className="secondary-button hero-download" href="/Shivanshu_Resume.pdf" download>
              Download CV
            </a>
          </div>
        </section>

        <motion.section
          className="tech-section glass-card"
          id="tech"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="tech-section-header">
            <span className="card-label">Tech Stack</span>
            {/* <h2>Core stack in motion</h2> */}
          </div>

          <div className="tech-marquee">
            <motion.div
              className="tech-track"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              {flowingTechStack.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className={`tech-chip ${item.accent}`}
                >
                  <div className="tech-icon">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="projects-section"
          id="projects"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="projects-heading">
            <div>
              <span className="card-label">Projects</span>
              {/* <h2>Selected work presented with depth and clarity</h2>
              <p>
                Each card highlights the problem, stack, and key contribution,
                with a details view for the full project story.
              </p> */}
            </div>

            <div className="project-nav-controls" aria-label="Project navigation">
              <button
                type="button"
                className="project-nav-button"
                onClick={showPreviousProject}
                aria-label="Show previous project"
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <span className="project-counter">
                {currentProjectIndex + 1} / {projectShowcase.length}
              </span>
              <button
                type="button"
                className="project-nav-button"
                onClick={showNextProject}
                aria-label="Show next project"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          <div className="projects-carousel">
            <motion.div
              className="projects-track"
              animate={{ x: `-${currentProjectIndex * 100}%` }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            >
            {projectShowcase.map((project, index) => {
              const isOpen = activeProject === project.id

              return (
                <motion.article
                  key={project.id}
                  className="project-card glass-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    opacity: { duration: 0.55, delay: index * 0.08, ease: 'easeOut' },
                    y: {
                      duration: 4.5 + index * 0.35,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.18,
                    },
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="project-topline">
                    <span className="project-label">{project.label}</span>
                    <span className="project-author">Author: {project.author}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-summary">{project.summary}</p>

                  <button
                    type="button"
                    className="project-detail-button"
                    onClick={() => toggleProject(project.id)}
                  >
                    {isOpen ? 'Hide Details' : 'View Details'}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        className="project-details"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 18 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <div className="project-stack">
                          {project.stack.map((item) => (
                            <span key={item} className="project-stack-pill">
                              {item}
                            </span>
                          ))}
                        </div>

                        {project.Github ? (
                          <a
                            className="project-github-link"
                            href={project.Github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="project-github-icon" aria-hidden="true">
                              <svg viewBox="0 0 24 24">
                                <path d="M9 18c-4 1.2-4-2-5.5-2.5" />
                                <path d="M15 21v-3.1c0-1 .08-1.42-.45-1.92 2.73-.3 5.6-1.34 5.6-6.08a4.75 4.75 0 0 0-1.28-3.3 4.42 4.42 0 0 0-.08-3.23s-1.05-.34-3.44 1.27a11.8 11.8 0 0 0-6.28 0C6.68 3.02 5.63 3.36 5.63 3.36a4.42 4.42 0 0 0-.08 3.23 4.75 4.75 0 0 0-1.28 3.3c0 4.73 2.86 5.79 5.59 6.08-.44.38-.61.8-.61 1.56V21" />
                              </svg>
                            </span>
                            <span>Open GitHub Repository</span>
                          </a>
                        ) : null}

                        <ul className="project-points">
                          {project.details.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              )
            })}
            </motion.div>
          </div>
        </motion.section>

        <section className="content-grid">

          <article className="glass-card" id="about">
            <div className="about-layout">
              <div className="about-copy">
                <span className="card-label">About</span>
                <h2>Building modern products with code, design, and AI.</h2>
                <p>
                  I&apos;m Shivanshu Vats, a passionate Full Stack Developer and AI
                  enthusiast focused on building modern, scalable, and
                  interactive digital experiences. I enjoy transforming ideas
                  into real-world applications through clean code, creative
                  design, and intelligent systems.
                </p>
                <p>
                  With a strong interest in web technologies, backend
                  development, and open source, I&apos;m continuously learning and
                  exploring tools that help create impactful products.
                  Currently, I&apos;m deepening my knowledge in full stack
                  engineering, data structures and algorithms, and preparing
                  for GSoC while working on projects involving React, Node.js,
                  AI integrations, and modern UI/UX design.
                </p>
                {/* <p>
                  I love building futuristic interfaces, solving complex
                  problems, and creating applications that combine
                  performance, functionality, and great user experience.
                </p> */}
              </div>

              <div className="about-visual">
                <div className="about-image-slot">
                  <img
                    src="/pic.jpeg"
                    alt="Shivanshu Vats portrait"
                    className="about-image"
                  />
                </div>
              </div>
            </div>
          </article>

          <article className="glass-card" id="contact">
            <span className="card-label">Contact</span>
            <h2>Let&apos;s connect and build something meaningful.</h2>
            <p>
              I&apos;m open to internships, collaborations, and opportunities where
              I can contribute as a full stack developer.
            </p>

            <div className="contact-details">
              <a className="contact-item" href="https://maps.google.com/?q=India" target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
                    <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </span>
                <span>Greater Noida,India</span>
              </a>

              <a className="contact-item" href="tel:+917479999543">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.29a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span>+91 7479999543</span>
              </a>

              <a className="contact-item" href="mailto:vatsshivanshu05@gmail.com">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span>vatsshivanshu05@gmail.com</span>
              </a>

              <a
                className="contact-item"
                href="https://www.linkedin.com/in/shivanshu-vats-96b1002b9"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.94 8.5V19" />
                    <path d="M6.97 5.5a1.5 1.5 0 1 1-.03 0" />
                    <path d="M11.5 19v-5.25a2.75 2.75 0 1 1 5.5 0V19" />
                    <path d="M11.5 11h0v8" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>

              <a
                className="contact-item"
                href="https://github.com/shivanshu24-code"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 18c-4 1.2-4-2-5.5-2.5" />
                    <path d="M15 21v-3.1c0-1 .08-1.42-.45-1.92 2.73-.3 5.6-1.34 5.6-6.08a4.75 4.75 0 0 0-1.28-3.3 4.42 4.42 0 0 0-.08-3.23s-1.05-.34-3.44 1.27a11.8 11.8 0 0 0-6.28 0C6.68 3.02 5.63 3.36 5.63 3.36a4.42 4.42 0 0 0-.08 3.23 4.75 4.75 0 0 0-1.28 3.3c0 4.73 2.86 5.79 5.59 6.08-.44.38-.61.8-.61 1.56V21" />
                  </svg>
                </span>
                <span>GitHub</span>
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Mainpage
