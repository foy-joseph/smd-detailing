/* ── SMD Detailing · Shared Components ── */

const THEMES = {
  gold: {
    '--accent': '#C9A55C', '--accent-hover': '#D4B36A',
    '--accent-glow': 'rgba(201,165,92,0.2)', '--accent-text': '#0C0B09',
    '--bg': '#0C0B09', '--bg-elevated': '#141210',
    '--bg-card': '#1A1714', '--bg-card-hover': '#211E19',
    '--text-primary': '#F2EDE4', '--text-secondary': '#A09888',
    '--text-muted': '#6B6255',
    '--border': 'rgba(242,237,228,0.08)', '--border-accent': 'rgba(201,165,92,0.15)',
  },
  oxblood: {
    '--accent': '#A65D3F', '--accent-hover': '#BE7050',
    '--accent-glow': 'rgba(166,93,63,0.2)', '--accent-text': '#F2EDE4',
    '--bg': '#0B0908', '--bg-elevated': '#131110',
    '--bg-card': '#1A1614', '--bg-card-hover': '#241E1B',
    '--text-primary': '#F2EDE4', '--text-secondary': '#A09888',
    '--text-muted': '#6B6255',
    '--border': 'rgba(242,237,228,0.08)', '--border-accent': 'rgba(166,93,63,0.15)',
  },
  midnight: {
    '--accent': '#7B9DBF', '--accent-hover': '#8EAECE',
    '--accent-glow': 'rgba(123,157,191,0.2)', '--accent-text': '#0A0C0F',
    '--bg': '#08090B', '--bg-elevated': '#0F1118',
    '--bg-card': '#151821', '--bg-card-hover': '#1B1F2B',
    '--text-primary': '#E8ECF2', '--text-secondary': '#8890A0',
    '--text-muted': '#555B6B',
    '--border': 'rgba(232,236,242,0.08)', '--border-accent': 'rgba(123,157,191,0.15)',
  }
};

const FONT_PAIRINGS = {
  spaceGrotesk: { '--font-display': "'Space Grotesk', sans-serif", '--font-body': "'DM Sans', sans-serif" },
  outfit: { '--font-display': "'Outfit', sans-serif", '--font-body': "'Source Sans 3', sans-serif" },
};

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80',
  detail1: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
  detail2: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1200&q=80',
  car1: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
  car2: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  car3: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
  car4: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
  car5: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c6?auto=format&fit=crop&w=800&q=80',
  car6: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
  wedding: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?auto=format&fit=crop&w=800&q=80',
  workshop: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
  about: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
};

/* ── Hooks ── */
function useInView(ref, opts = {}) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target); }
    }, { threshold: 0.1, ...opts });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function useCountUp(end, duration = 2000, startWhen = true) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!startWhen) return;
    let start = 0;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [startWhen, end, duration]);
  return val;
}

/* ── Components ── */
function Reveal({ children, delay = 0, direction = 'up', style = {}, className = '' }) {
  const ref = React.useRef();
  const vis = useInView(ref);
  const t = { up: 'translateY(28px)', down: 'translateY(-28px)', left: 'translateX(28px)', right: 'translateX(-28px)', none: 'none' };
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : (t[direction] || t.up),
      transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      willChange: 'opacity, transform',
      ...style
    }}>
      {children}
    </div>
  );
}

function Section({ children, style = {}, id, className = '' }) {
  return (
    <section id={id} className={className} style={{
      padding: `var(--section-pad) clamp(20px, 5vw, 40px)`,
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      ...style
    }}>
      {children}
    </section>
  );
}

function FullSection({ children, style = {}, id, className = '' }) {
  return (
    <section id={id} className={className} style={{
      padding: `var(--section-pad) 0`,
      ...style
    }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        {children}
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontSize: '0.8rem',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      display: 'block',
      marginBottom: '12px',
    }}>{children}</span>
  );
}

function SectionTitle({ children, style = {} }) {
  return (
    <h2 style={{
      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: '20px',
      ...style
    }}>{children}</h2>
  );
}

function Btn({ children, variant = 'primary', size = 'md', onClick, style = {}, href }) {
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '0.03em',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 'var(--radius)',
    transition: 'all 0.25s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  };
  const sizes = {
    sm: { padding: '10px 20px', fontSize: '0.85rem' },
    md: { padding: '14px 32px', fontSize: '0.95rem' },
    lg: { padding: '18px 40px', fontSize: '1.05rem' },
  };
  const variants = {
    primary: {
      background: 'var(--accent)', color: 'var(--accent-text)',
    },
    outline: {
      background: 'transparent', color: 'var(--accent)',
      border: '1.5px solid var(--accent)',
    },
    ghost: {
      background: 'transparent', color: 'var(--text-primary)',
    },
  };
  const s = { ...base, ...sizes[size], ...variants[variant], ...style };
  const hoverHandlers = {
    onMouseEnter: (e) => {
      if (variant === 'primary') { e.target.style.background = 'var(--accent-hover)'; e.target.style.transform = 'translateY(-1px)'; }
      if (variant === 'outline') { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--accent-text)'; }
      if (variant === 'ghost') { e.target.style.color = 'var(--accent)'; }
    },
    onMouseLeave: (e) => {
      if (variant === 'primary') { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'none'; }
      if (variant === 'outline') { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }
      if (variant === 'ghost') { e.target.style.color = 'var(--text-primary)'; }
    }
  };
  if (href) return <a href={href} style={s} {...hoverHandlers}>{children}</a>;
  return <button onClick={onClick} style={s} {...hoverHandlers}>{children}</button>;
}

function Divider({ style = {} }) {
  return <div style={{ height: '1px', background: 'var(--border)', margin: '0', ...style }}></div>;
}

function GoldLine({ width = '60px', style = {} }) {
  return <div style={{ width, height: '2px', background: 'var(--accent)', borderRadius: '1px', ...style }}></div>;
}

function Badge({ children, style = {} }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: 'var(--accent-glow)',
      color: 'var(--accent)',
      padding: '6px 14px',
      borderRadius: '100px',
      border: '1px solid var(--border-accent)',
      display: 'inline-block',
      ...style
    }}>{children}</span>
  );
}

function ImagePlaceholder({ label, aspect = '16/9', style = {} }) {
  return (
    <div style={{
      aspectRatio: aspect,
      background: `repeating-linear-gradient(
        -45deg,
        var(--bg-card),
        var(--bg-card) 8px,
        var(--bg-card-hover) 8px,
        var(--bg-card-hover) 16px
      )`,
      borderRadius: 'var(--radius)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      ...style,
    }}>
      <span style={{
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        textAlign: 'center',
        padding: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>{label}</span>
    </div>
  );
}

function LazyImg({ src, alt, style = {} }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {!loaded && <div style={{
        position: 'absolute', inset: 0,
        background: 'var(--bg-card)',
        animation: 'pulse 1.5s ease infinite',
      }}></div>}
      <img
        src={src} alt={alt} loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease',
        }}
      />
    </div>
  );
}

/* ── Card styles helper ── */
function getCardStyle(cardStyle, extra = {}) {
  const styles = {
    bordered: {
      background: 'var(--bg-card)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-lg)',
    },
    filled: {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
    },
    glass: {
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 'var(--radius-lg)',
    },
  };
  return { ...(styles[cardStyle] || styles.bordered), ...extra };
}

Object.assign(window, {
  THEMES, FONT_PAIRINGS, IMAGES,
  useInView, useCountUp,
  Reveal, Section, FullSection, SectionLabel, SectionTitle,
  Btn, Divider, GoldLine, Badge, ImagePlaceholder, LazyImg,
  getCardStyle,
});
