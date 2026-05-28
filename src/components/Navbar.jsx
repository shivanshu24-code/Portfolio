const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5V19" />
        <path d="M6.97 5.5a1.5 1.5 0 1 1-.03 0" />
        <path d="M11.5 19v-5.25a2.75 2.75 0 1 1 5.5 0V19" />
        <path d="M11.5 11h0v8" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18c-4 1.2-4-2-5.5-2.5" />
        <path d="M15 21v-3.1c0-1 .08-1.42-.45-1.92 2.73-.3 5.6-1.34 5.6-6.08a4.75 4.75 0 0 0-1.28-3.3 4.42 4.42 0 0 0-.08-3.23s-1.05-.34-3.44 1.27a11.8 11.8 0 0 0-6.28 0C6.68 3.02 5.63 3.36 5.63 3.36a4.42 4.42 0 0 0-.08 3.23 4.75 4.75 0 0 0-1.28 3.3c0 4.73 2.86 5.79 5.59 6.08-.44.38-.61.8-.61 1.56V21" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/shivanshu.vats_24?igsh=MTB3OTAwYWxwOTd3bQ==',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
        <path d="M16.5 7.5h.01" />
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
]

function Navbar() {
  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar-social" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="contact-button" href="#contact">
          Contact Me
        </a>
      </nav>
    </header>
  )
}

export default Navbar
