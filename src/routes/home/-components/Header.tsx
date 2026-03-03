export function Header() {
  return (
    <header style={{ background: '#1a1a2e', color: '#fff', padding: '1rem 2rem' }}>
      <nav>
        <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>🏠 MyApp</span>
        <ul style={{ display: 'inline-flex', gap: '1.5rem', listStyle: 'none', marginLeft: '2rem' }}>
          <li><a href='/' style={{ color: '#eee', textDecoration: 'none' }}>Home</a></li>
          <li><a href='/about' style={{ color: '#eee', textDecoration: 'none' }}>About</a></li>
          <li><a href='/contact' style={{ color: '#eee', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
