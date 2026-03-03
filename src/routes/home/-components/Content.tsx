export function Content() {
  return (
    <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Welcome</h2>
        <p>
          This is the main content area of the home page. Here you can showcase
          features, recent updates, or any relevant information for your visitors.
        </p>
      </section>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {['Fast', 'Reliable', 'Modern'].map((label) => (
          <div key={label} style={{ background: '#f5f5f5', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
            <h3>{label}</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Sample feature card showcasing {label.toLowerCase()} capabilities.</p>
          </div>
        ))}
      </section>
    </main>
  )
}
