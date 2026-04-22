import { useMemo, useState } from 'react'
import './App.css'

const highlights = [
  {
    title: 'Adama Cultural Center',
    description:
      'Explore rotating exhibits, live performances, and artisan workshops celebrating local heritage.',
    stat: '120+ yearly events',
  },
  {
    title: 'Smart Mobility Corridors',
    description:
      'Connected bike lanes, EV charging hubs, and transit-first routes make moving around efficient and clean.',
    stat: '40 km green transit network',
  },
  {
    title: 'Innovation District',
    description:
      'A growing zone of startups, co-working labs, and university partnerships powering next-gen city solutions.',
    stat: '300+ active startups',
  },
]

const events = [
  {
    id: 1,
    name: 'Sunset Food & Music Festival',
    category: 'Festival',
    date: '2026-05-15',
    location: 'Unity Park',
  },
  {
    id: 2,
    name: 'City Innovation Expo',
    category: 'Technology',
    date: '2026-06-02',
    location: 'Adama Convention Hall',
  },
  {
    id: 3,
    name: 'Family Cycling Day',
    category: 'Community',
    date: '2026-05-21',
    location: 'Green Loop Boulevard',
  },
  {
    id: 4,
    name: 'Open-Air Cinema Weekend',
    category: 'Entertainment',
    date: '2026-06-10',
    location: 'Riverside Amphitheater',
  },
]

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function App() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [subscribers, setSubscribers] = useState([])
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const categories = useMemo(
    () => ['All', ...new Set(events.map((event) => event.category))],
    [],
  )

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const searchMatch = event.name.toLowerCase().includes(query.toLowerCase())
      const categoryMatch =
        selectedCategory === 'All' || event.category === selectedCategory

      return searchMatch && categoryMatch
    })
  }, [query, selectedCategory])

  const handleSubscribe = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setMessage('Please enter an email address.')
      return
    }

    const emailValue = email.trim().toLowerCase()
    const isAlreadySubscribed = subscribers.includes(emailValue)

    if (isAlreadySubscribed) {
      setMessage('You are already subscribed with this email.')
      return
    }

    setSubscribers((previous) => [...previous, emailValue])
    setEmail('')
    setMessage('Thanks for subscribing! You will receive city updates soon.')
  }

  return (
    <div className="city-app">
      <header className="hero">
        <nav className="top-nav" aria-label="Main navigation">
          <a className="brand" href="#home">
            Adama City
          </a>
          <div className="nav-links">
            <a href="#highlights">Highlights</a>
            <a href="#events">Events</a>
            <a href="#subscribe">Subscribe</a>
          </div>
        </nav>

        <div id="home" className="hero-content">
          <p className="eyebrow">Welcome to the future-ready city portal</p>
          <h1>Discover Adama: Vibrant, Smart, and Connected</h1>
          <p className="subtitle">
            Stay informed with local events, explore city innovations, and be
            part of a thriving community.
          </p>
          <a className="primary-cta" href="#events">
            Explore upcoming events
          </a>
        </div>
      </header>

      <main>
        <section id="highlights" className="section">
          <h2>City highlights</h2>
          <div className="cards-grid">
            {highlights.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.stat}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="section">
          <div className="section-header">
            <h2>Upcoming events</h2>
            <p>Search and filter to quickly find what matters to you.</p>
          </div>

          <div className="event-controls">
            <label>
              Search events
              <input
                type="search"
                placeholder="Try: festival, expo, cinema"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <label>
              Category
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <ul className="event-list" aria-live="polite">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <li key={event.id} className="event-item">
                  <div>
                    <p className="event-title">{event.name}</p>
                    <p className="event-meta">{event.location}</p>
                  </div>
                  <div className="event-side">
                    <span>{event.category}</span>
                    <time dateTime={event.date}>{formatDate(event.date)}</time>
                  </div>
                </li>
              ))
            ) : (
              <li className="empty-state">No events match your filters.</li>
            )}
          </ul>
        </section>

        <section id="subscribe" className="section subscribe">
          <h2>Get city updates</h2>
          <p>
            Join {subscribers.length} resident{subscribers.length === 1 ? '' : 's'}{' '}
            receiving event and development updates.
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p className="form-message">{message}</p>}
        </section>
      </main>
    </div>
  )
}

export default App
