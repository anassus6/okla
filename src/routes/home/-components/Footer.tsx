export function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', color: '#aaa', padding: '1.5rem 2rem', textAlign: 'center', marginTop: 'auto' }}>
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
        Built with ❤️ using TanStack Start
      </p>
    </footer>
  )
}
