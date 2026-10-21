/* ── SMD Detailing · Shared Components ── */

const THEMES = {
  electric: {
    '--accent': '#2E8BFF', '--accent-hover': '#57A3FF',
    '--accent-glow': 'rgba(46,139,255,0.22)', '--accent-text': '#06080C',
    '--bg': '#07080A', '--bg-elevated': '#0D0F14',
    '--bg-card': '#12151C', '--bg-card-hover': '#181C26',
    '--text-primary': '#EAEEF5', '--text-secondary': '#DCE1EA',
    '--text-muted': '#8A93A6',
    '--border': 'rgba(234,238,245,0.08)', '--border-accent': 'rgba(46,139,255,0.18)',
  },
  gold: {
    '--accent': '#C9A55C', '--accent-hover': '#D4B36A',
    '--accent-glow': 'rgba(201,165,92,0.2)', '--accent-text': '#0C0B09',
    '--bg': '#0C0B09', '--bg-elevated': '#141210',
    '--bg-card': '#1A1714', '--bg-card-hover': '#211E19',
    '--text-primary': '#F2EDE4', '--text-secondary': '#E6E1D8',
    '--text-muted': '#A09888',
    '--border': 'rgba(242,237,228,0.08)', '--border-accent': 'rgba(201,165,92,0.15)',
  },
  oxblood: {
    '--accent': '#A65D3F', '--accent-hover': '#BE7050',
    '--accent-glow': 'rgba(166,93,63,0.2)', '--accent-text': '#F2EDE4',
    '--bg': '#0B0908', '--bg-elevated': '#131110',
    '--bg-card': '#1A1614', '--bg-card-hover': '#241E1B',
    '--text-primary': '#F2EDE4', '--text-secondary': '#E6E1D8',
    '--text-muted': '#A09888',
    '--border': 'rgba(242,237,228,0.08)', '--border-accent': 'rgba(166,93,63,0.15)',
  },
  midnight: {
    '--accent': '#7B9DBF', '--accent-hover': '#8EAECE',
    '--accent-glow': 'rgba(123,157,191,0.2)', '--accent-text': '#0A0C0F',
    '--bg': '#08090B', '--bg-elevated': '#0F1118',
    '--bg-card': '#151821', '--bg-card-hover': '#1B1F2B',
    '--text-primary': '#E8ECF2', '--text-secondary': '#DADFE8',
    '--text-muted': '#8890A0',
    '--border': 'rgba(232,236,242,0.08)', '--border-accent': 'rgba(123,157,191,0.15)',
  }
};

const FONT_PAIRINGS = {
  spaceGrotesk: { '--font-display': "'Space Grotesk', sans-serif", '--font-body': "'DM Sans', sans-serif" },
  outfit: { '--font-display': "'Outfit', sans-serif", '--font-body': "'Source Sans 3', sans-serif" },
};

/* All photography is Shay's own work — shot on his phone, Donegal driveways and all. */
const IMAGES = {
  hero: '/images/hero-tiguan-rline.jpg',
  detail1: '/images/golf-interior.jpg',
  detail2: '/images/quilted-seats.jpg',
  car1: '/images/tiguan-rline-front.jpg',
  car2: '/images/classic-mini-morris.jpg',
  car3: '/images/audi-a3.jpg',
  car4: '/images/kia-sorento.jpg',
  car5: '/images/kia-sportage.jpg',
  car6: '/images/classic-mini-foam.jpg',
  wedding: '/images/classic-mini-finish.jpg',
  workshop: '/images/rangerover-foam.jpg',
  about: '/images/classic-mini-finish.jpg',
  shay: '/images/shay-portrait.jpg',
};

const SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/smddetailing_/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@smddetailing_' },
  { name: 'Facebook', url: 'https://www.facebook.com/p/SMD-Detailing-61589714385602/' },
];

function SocialIcon({ name, size = 18 }) {
  const paths = {
    Instagram: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
    TikTok: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
    Facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

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
