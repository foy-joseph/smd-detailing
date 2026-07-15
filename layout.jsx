/* ── SMD Detailing · Nav + Footer ── */

const pathFor = (id) => (id === 'home' ? '/' : `/${id}`);

function Nav({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'dealers', label: 'Dealers' },
  ];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: scrolled ? '12px clamp(20px,5vw,40px)' : '20px clamp(20px,5vw,40px)',
    background: scrolled ? 'rgba(12,11,9,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    transition: 'all 0.35s ease',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  };

  const logoStyle = {
    fontFamily: 'var(--font-display)', fontWeight: 700,
    fontSize: '1.3rem', color: 'var(--text-primary)',
    cursor: 'pointer', letterSpacing: '-0.01em',
    display: 'flex', alignItems: 'center', gap: '10px',
  };

  const desktopLinks = {
    display: 'flex', gap: '32px', alignItems: 'center',
  };

  const handleNav = (id) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={logoStyle} onClick={() => handleNav('home')}>
          <span style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700 }}>SMD</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Detailing</span>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={desktopLinks}>
          {links.map(l => (
            <a key={l.id} href={pathFor(l.id)} onClick={e => { e.preventDefault(); handleNav(l.id); }} style={{
              background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500,
              color: currentPage === l.id ? 'var(--accent)' : 'var(--text-secondary)',
              transition: 'color 0.2s',
              padding: '4px 0',
              borderBottom: currentPage === l.id ? '1px solid var(--accent)' : '1px solid transparent',
            }} onMouseEnter={e => { if(currentPage !== l.id) e.target.style.color = 'var(--text-primary)'; }}
               onMouseLeave={e => { if(currentPage !== l.id) e.target.style.color = 'var(--text-secondary)'; }}>
              {l.label}
            </a>
          ))}
          <Btn size="sm" onClick={() => handleNav('book')}>Book Now</Btn>
        </div>

        {/* Mobile hamburger */}
        <button className="nav-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '8px', display: 'none', flexDirection: 'column', gap: '5px',
        }}>
          <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '1px', transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
          <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '1px', transition: 'all 0.3s',
            opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '1px', transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(12,11,9,0.97)',
        backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '28px',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {links.map((l, i) => (
          <a key={l.id} href={pathFor(l.id)} onClick={e => { e.preventDefault(); handleNav(l.id); }} style={{
            background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none',
            fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600,
            color: currentPage === l.id ? 'var(--accent)' : 'var(--text-primary)',
            transition: 'all 0.3s',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: menuOpen ? 1 : 0,
            transitionDelay: `${i * 0.05}s`,
          }}>{l.label}</a>
        ))}
        <Btn size="lg" onClick={() => handleNav('book')} style={{
          marginTop: '16px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
          opacity: menuOpen ? 1 : 0,
          transition: 'all 0.3s',
          transitionDelay: '0.3s',
        }}>Book Now</Btn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function Footer({ navigate }) {
  const towns = ['Ballybofey', 'Stranorlar', 'Letterkenny', 'Donegal Town', 'Killybegs', 'Ardara', 'Glenties', 'Raphoe', 'Convoy', 'Lifford', 'Castlefinn', 'Dungloe'];

  return (
    <footer style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
      <div style={{
        maxWidth: 'var(--content-max)', margin: '0 auto',
        padding: '60px clamp(20px,5vw,40px) 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
      }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent)' }}>SMD</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Detailing</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
            Craft car detailing by Shay McDevitt. Every car, every time. Based in Ballybofey, Co. Donegal.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            <a href="https://www.instagram.com/smddetailing/" target="_blank" rel="noopener" style={{
              color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500,
              transition: 'color 0.2s',
            }} onMouseEnter={e => e.target.style.color = 'var(--accent)'}
               onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Instagram</a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[{id:'services',l:'Services'},{id:'about',l:'About Shay'},{id:'gallery',l:'Gallery'},{id:'book',l:'Book Now'},{id:'dealers',l:'Dealer Programme'}].map(lnk => (
              <a key={lnk.id} href={pathFor(lnk.id)} onClick={e => { e.preventDefault(); navigate(lnk.id); }} style={{
                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', textDecoration: 'none',
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: 'var(--text-secondary)', transition: 'color 0.2s', padding: 0,
              }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                 onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>{lnk.l}</a>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>Coverage</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px' }}>
            {towns.map(t => (
              <span key={t} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>Get in Touch</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <span>Ballybofey, Co. Donegal</span>
            <a href="mailto:hello@smddetailing.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = 'var(--accent)'}
               onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>hello@smddetailing.com</a>
            <a href="tel:+353871146173" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = 'var(--accent)'}
               onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>087 114 6173</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 'var(--content-max)', margin: '0 auto',
        padding: '20px clamp(20px,5vw,40px)',
        borderTop: '1px solid var(--border)',
        display: 'flex', flexWrap: 'wrap', gap: '12px',
        justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>© 2026 SMD Detailing. All rights reserved.</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          All-Ireland Mini Company 1st Place 2026
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });


/* ── SMD Detailing · Hero Section ── */

function Hero({ navigate }) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const trustItems = [
    { icon: '◆', label: 'All-Ireland 1st Place' },
    { icon: '◆', label: 'North Macedonia 2026' },
    { icon: '◆', label: 'High Demand — Book Early' },
  ];

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
      }}>
        <img
          src={IMAGES.hero}
          alt="VW Tiguan R-Line freshly detailed by SMD Detailing, Ballybofey"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: loaded ? 'scale(1)' : 'scale(1.05)',
            transition: 'transform 1.2s cubic-bezier(.22,1,.36,1)',
          }}
        />
        {/* Overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(12,11,9,0.6) 0%, rgba(12,11,9,0.4) 40%, rgba(12,11,9,0.85) 100%)',
        }}></div>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(12,11,9,0.7) 0%, transparent 60%)',
        }}></div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '140px clamp(20px,5vw,40px) 80px',
        width: '100%',
      }}>
        <div style={{ maxWidth: '700px' }}>
          {/* Eyebrow */}
          <div style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.7s cubic-bezier(.22,1,.36,1) 0.2s',
          }}>
            <GoldLine width="40px" style={{ marginBottom: '20px' }} />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--accent)',
            }}>Ballybofey, Co. Donegal</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: '24px',
            marginBottom: '24px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(.22,1,.36,1) 0.35s',
          }}>
            Craft Detailing.<br />
            <span style={{ color: 'var(--accent)' }}>Every Car. Every Time.</span>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '36px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(.22,1,.36,1) 0.5s',
          }}>
            I do every single car myself. Published prices, no DMs for a quote.
            Owner-operator detailing with international credentials.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            marginBottom: '48px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.8s cubic-bezier(.22,1,.36,1) 0.65s',
          }}>
            <Btn size="lg" onClick={() => navigate('book')}>Get on the List</Btn>
            <Btn size="lg" variant="outline" onClick={() => navigate('services')}>View Packages</Btn>
          </div>

          {/* Trust strip */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '24px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.8s cubic-bezier(.22,1,.36,1) 0.8s',
          }}>
            {trustItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.55rem' }}>{item.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem', fontWeight: 500,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: loaded ? 0.5 : 0,
        transition: 'opacity 1s ease 1.2s',
      }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>Scroll</span>
        <div style={{ width: '1px', height: '24px', background: 'var(--text-muted)', animation: 'pulse 2s ease infinite' }}></div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
