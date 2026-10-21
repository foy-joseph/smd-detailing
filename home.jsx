/* ── SMD Detailing · Pricing Cards + Comparison ── */

const PACKAGES = [
  {
    eyebrow: 'The Weekly',
    tier: 'Mini Valet',
    value: 'mini-valet',
    priceFrom: 70,
    priceTo: 90,
    duration: '3–4 hours',
    popular: false,
    desc: "The foundation. A proper hand wash and interior clean — no sponges, no shortcuts. Perfect for regular maintenance.",
    includes: [
      'Two-bucket hand wash & dry',
      'Wheel faces cleaned',
      'Tyre dressing applied',
      'Interior full vacuum',
      'Dashboard & console wiped',
      'Door cards & sills cleaned',
      'Glass cleaned inside & out',
      'Air freshener',
    ],
  },
  {
    eyebrow: 'The Service',
    tier: 'Full Valet',
    value: 'full-valet',
    priceFrom: 100,
    priceTo: 160,
    duration: '5–8 hours',
    popular: true,
    desc: "The one most people want. Everything in the Mini Valet, plus decontamination, a full interior deep clean and three months of sealant protection.",
    includes: [
      'Everything in Mini Valet, plus:',
      'Tar removal',
      '3-month ceramic sealant',
      'Interior deep clean & extraction',
      'Leather conditioning',
      'Trim & plastic restoration',
      'Glass polished crystal-clear',
      'Door shuts & boot cleaned',
      'Tyre walls dressed',
    ],
  },
  {
    eyebrow: 'The Showroom',
    tier: 'Premium Valet',
    value: 'premium-valet',
    priceFrom: 180,
    priceTo: 260,
    duration: '6–10 hours',
    popular: false,
    desc: "The step up. Everything in the Full Valet, plus an engine bay detail, leather rejuvenation, UV protection for the plastics, and a hand polish and wax.",
    includes: [
      'Everything in Full Valet, plus:',
      'Engine bay detail',
      'Leather rejuvenation',
      'Plastic UV protection',
      'Hand polish & wax',
    ],
  },
  {
    eyebrow: 'The Concours',
    tier: 'Deluxe Detail',
    value: 'deluxe-detail',
    priceFrom: 400,
    priceTo: 600,
    duration: '10–15 hours',
    popular: false,
    desc: "The full works. Multi-stage paint correction and a professional ceramic coating. The one that makes people ask if you bought a new car.",
    includes: [
      'Everything in Premium Valet, plus:',
      'Multi-stage paint correction',
      'Ceramic coating applied',
      'Exhaust tips mirror-polished',
      'Full trim restoration',
      'Interior protection applied',
      'Wheel arches cleaned & dressed',
      'Final inspection under lights',
    ],
  },
];

function PricingCards({ navigate, cardStyle = 'bordered' }) {
  return (
    <FullSection id="pricing" style={{ background: 'var(--bg-elevated)' }}>
      <Reveal>
        <SectionTitle style={{ marginBottom: '40px' }}>Four Levels of Care</SectionTitle>
      </Reveal>

      <div id="pricing-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: 'auto',
        gap: '1px',
        background: 'var(--border)',
        alignItems: 'stretch',
      }}>
        {PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.tier} delay={i * 0.12} className="pricing-cell" style={{ display: 'grid', gridRow: 'span 10', gridTemplateRows: 'subgrid' }}>
            <PricingCard pkg={pkg} navigate={navigate} cardStyle={cardStyle} />
          </Reveal>
        ))}
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 1100px) {
          #pricing-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          #pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </FullSection>
  );
}

function PricingCard({ pkg, navigate, cardStyle }) {
  const ref = React.useRef();
  const inView = useInView(ref);
  const priceFrom = useCountUp(pkg.priceFrom, 1200, inView);

  return (
    <div
      ref={ref}
      className="pricing-col"
      style={{
        padding: 'clamp(28px, 3vw, 40px)',
        position: 'relative',
        display: 'grid',
        gridRow: 'span 10',
        gridTemplateRows: 'subgrid',
        alignContent: 'start',
        background: 'var(--bg-elevated)',
      }}
    >
      {/* Popular accent bar */}
      {pkg.popular && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '3px', background: 'var(--accent)',
        }}></div>
      )}

      {/* Badge slot (keeps titles aligned across cards) */}
      <div style={{ height: '26px', marginBottom: '14px', display: 'flex', alignItems: 'center' }}>
        {pkg.popular && <Badge>Most Popular</Badge>}
      </div>

      {/* Tier name */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '12px',
      }}>{pkg.tier}</h3>

      {/* Description */}
      <p style={{
        fontSize: '0.9rem', color: 'var(--text-secondary)',
        lineHeight: 1.6, marginBottom: '24px',
        minHeight: '58px',
      }}>{pkg.desc}</p>

      {/* Eyebrow above price */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.7rem', fontWeight: 600,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '6px', display: 'block',
      }}>{pkg.eyebrow}</span>

      {/* Price */}
      <div style={{ marginBottom: '4px' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.9rem, 2.4vw, 2.5rem)', fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1, letterSpacing: '-0.02em', whiteSpace: 'nowrap',
        }}>€{priceFrom}–{pkg.priceTo}</span>
      </div>

      {/* Duration */}
      <span style={{
        fontSize: '0.85rem', color: 'var(--text-muted)',
        marginBottom: '28px', display: 'block',
      }}>{pkg.duration}</span>

      {/* CTA */}
      <Btn
        variant={pkg.popular ? 'primary' : 'outline'}
        style={{ width: '100%' }}
        onClick={() => navigate('book', { package: pkg.value })}
      >
        Book {pkg.tier}
      </Btn>

      {/* Divider */}
      <div style={{
        height: '1px', background: 'var(--border)',
        margin: '28px 0',
      }}></div>

      {/* Inclusions header */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.78rem', fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: 'var(--text-primary)',
        marginBottom: '16px', display: 'block',
      }}>Includes:</span>

      {/* Inclusions list */}
      <ul style={{
        listStyle: 'none', padding: 0, margin: 0,
        display: 'flex', flexDirection: 'column', gap: '11px',
      }}>
        {pkg.includes.map((item, j) => {
          const isHeader = item.endsWith(':');
          return (
            <li key={j} style={{
              display: 'flex', gap: '10px', alignItems: 'flex-start',
              fontSize: '0.88rem',
              color: isHeader ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: isHeader ? 600 : 400,
              lineHeight: 1.5,
            }}>
              {!isHeader && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ── Comparison Section ── */
function Comparison({ cardStyle = 'bordered' }) {
  const rows = [
    { label: 'Who does the work', budget: 'Whoever turns up', bigName: 'Hired lads', smd: 'Shay — every time' },
    { label: 'Published prices', budget: '✕', bigName: 'DMs only', smd: '✓ Always' },
    { label: 'Products used', budget: 'Unknown', bigName: 'Basic', smd: 'Autosmart · Koch Chemie · CarPro' },
    { label: 'Paint-safe method', budget: 'Sponge on paint', bigName: 'Varies', smd: 'Two-bucket, no sponges' },
    { label: 'Wait time', budget: 'Same day', bigName: 'Days', smd: 'In demand — book early' },
  ];

  return (
    <Section id="comparison">
      <Reveal>
        <SectionTitle>Comparing the Market</SectionTitle>
      </Reveal>

      <Reveal delay={0.15}>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{
            width: '100%', minWidth: '600px',
            borderCollapse: 'separate', borderSpacing: 0,
            fontSize: '0.9rem',
          }}>
            <thead>
              <tr>
                <th style={compTh()}></th>
                <th style={compTh()}>
                  <span style={{ color: 'var(--text-muted)' }}>€40 Weekend Lads</span>
                </th>
                <th style={compTh()}>
                  <span style={{ color: 'var(--text-muted)' }}>Big-Name Outfit</span>
                </th>
                <th style={compTh({ color: 'var(--accent)', borderBottom: '2px solid var(--accent)' })}>
                  SMD Detailing
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td style={compTd({ fontWeight: 600, color: 'var(--text-primary)' })}>{row.label}</td>
                  <td style={compTd({ color: 'var(--text-muted)' })}>{row.budget}</td>
                  <td style={compTd({ color: 'var(--text-muted)' })}>{row.bigName}</td>
                  <td style={compTd({
                    color: row.smd.startsWith('✓') ? 'var(--accent)' : 'var(--text-primary)',
                    fontWeight: 500,
                    background: 'var(--accent-glow)',
                  })}>{row.smd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}

function compTh(extra = {}) {
  return {
    fontFamily: 'var(--font-display)',
    fontSize: '0.85rem', fontWeight: 600,
    letterSpacing: '0.04em',
    padding: '16px 16px',
    textAlign: 'left',
    borderBottom: '1px solid var(--border)',
    ...extra,
  };
}

function compTd(extra = {}) {
  return {
    padding: '14px 16px',
    borderBottom: '1px solid var(--border)',
    verticalAlign: 'top',
    lineHeight: 1.5,
    ...extra,
  };
}

Object.assign(window, { PACKAGES, PricingCards, Comparison });

/* ── Seasonal · Winter Shield ── */
const WINTER_PACKAGES = [
  {
    tier: 'Winter Shield',
    value: 'winter-shield',
    eyebrow: 'Seasonal',
    priceFrom: 120,
    priceTo: 160,
    desc: "Seal the car before the salt goes down. Exterior protection that stops grit and road salt sitting on your paint, alloys and seals through the worst months.",
    includes: [
      'Two-bucket hand wash & full decontamination',
      'Tar & road-salt removal',
      'Winter-grade paint sealant',
      'Alloys & wheel arches deep cleaned and sealed',
      'Door & boot seals conditioned against freezing',
      'Hydrophobic glass treatment for wet roads',
    ],
  },
  {
    tier: 'Winter Shield+',
    value: 'winter-shield-plus',
    eyebrow: 'Seasonal · Full Season',
    priceFrom: 200,
    priceTo: 300,
    desc: "Everything in Winter Shield, plus a gloss-enhancement paint correction and a one-year ceramic coating — for the car that's out in it every day.",
    includes: [
      'Everything in Winter Shield, plus:',
      'Gloss enhancement paint correction',
      '1-year ceramic coating',
      'Ceramic wheel coating against salt & brake dust',
      'Underbody rinse & protection check',
    ],
  },
];

function WinterShield({ navigate, cardStyle = 'bordered', elevated = true }) {
  return (
    <FullSection id="winter" style={{ background: elevated ? 'var(--bg-elevated)' : 'var(--bg)' }}>
      <Reveal>
        <SectionLabel>Seasonal · November to March</SectionLabel>
        <SectionTitle>Winter Shield</SectionTitle>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.7 }}>
          Donegal roads get salted for months on end. Left sitting, salt eats paint, alloys and seals.
          Winter Shield is an exterior protection package, not a valet — it seals the car before the worst of it
          and makes every wash through the season easier. Both options are exterior only.
        </p>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        alignItems: 'stretch',
      }}>
        {WINTER_PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.tier} delay={i * 0.12} style={{ height: '100%' }}>
            <div style={{
              ...getCardStyle(cardStyle),
              padding: 'clamp(28px, 3vw, 40px)',
              height: '100%',
              display: 'flex', flexDirection: 'column',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '10px', display: 'block',
              }}>{pkg.eyebrow}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700,
                marginBottom: '12px',
              }}>{pkg.tier}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>{pkg.desc}</p>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.9rem, 2.4vw, 2.5rem)', fontWeight: 700,
                lineHeight: 1, letterSpacing: '-0.02em', whiteSpace: 'nowrap',
                marginBottom: '24px',
              }}>€{pkg.priceFrom}–{pkg.priceTo}</div>
              <Btn variant={i === 1 ? 'primary' : 'outline'} style={{ width: '100%' }} onClick={() => navigate('book', { package: pkg.value })}>
                Book {pkg.tier}
              </Btn>
              <div style={{ height: '1px', background: 'var(--border)', margin: '28px 0' }}></div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '16px', display: 'block',
              }}>Includes:</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {pkg.includes.map((item, j) => {
                  const isHeader = item.endsWith(':');
                  return (
                    <li key={j} style={{
                      display: 'flex', gap: '10px', alignItems: 'flex-start',
                      fontSize: '0.88rem', lineHeight: 1.5,
                      color: isHeader ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: isHeader ? 600 : 400,
                    }}>
                      {!isHeader && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                          <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </FullSection>
  );
}

Object.assign(window, { WINTER_PACKAGES, WinterShield });

/* ── Google Reviews ── */
const GOOGLE_PLACE_URL = 'https://maps.google.com/?cid=9371905911343218472';
const GOOGLE_REVIEWS = [
  { name: 'Chloe C', when: 'September 2026', text: "Absolutely delighted with my car! It looks and feels brand new again, inside and out. The attention to detail is incredible. I opted for the ceramic coating due to doing a lot of driving for work to protect the exterior from wear and tear and the price was fantastic, highly recommend." },
  { name: 'Ben Murray', when: 'June 2026', text: "Couldn't be happier with the valet. The car came up like new and the attention to detail was spot on. For the price, the quality was unreal and definitely exceeded my expectations. Highly recommend to anyone looking to get their car looking its best." },
  { name: 'Daniel Lynch', when: 'August 2026', text: "Couldn't be happier. Had a great time, clean the car, everyone was up to perfection. Quality was amazing. Communication was also amazing — everything to do with this man on this company was just top." },
];

const GOOGLE_REVIEW_COUNT = 6;

function GoogleG({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function Stars({ size = 16, color = '#FBBC04' }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }} aria-label="5 out of 5 stars">
      {[0,1,2,3,4].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21.1l1.6-7L2 9.3l7.1-.7z"/>
        </svg>
      ))}
    </span>
  );
}

const AVATAR_COLOURS = ['#7B1FA2', '#00796B', '#C62828', '#1565C0', '#EF6C00'];

function GoogleReviews({ cardStyle = 'bordered' }) {
  return (
    <Section id="reviews">
      <Reveal>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
          gap: '20px', marginBottom: '28px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <GoogleG size={44} />
            <div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>Google Rating</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 700, lineHeight: 1 }}>5.0</span>
                <Stars size={22} />
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>Based on {GOOGLE_REVIEW_COUNT} reviews</div>
            </div>
          </div>
          <Btn variant="outline" size="sm" href={GOOGLE_PLACE_URL} target="_blank">Read all reviews on Google</Btn>
        </div>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
      }}>
        {GOOGLE_REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.1} style={{ height: '100%' }}>
            <article style={{
              ...getCardStyle(cardStyle),
              padding: '22px 22px 20px',
              height: '100%',
              display: 'flex', flexDirection: 'column', gap: '12px',
            }}>
              <header style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span aria-hidden="true" style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: AVATAR_COLOURS[i % AVATAR_COLOURS.length], color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem',
                }}>{r.name.trim()[0]}</span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{r.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>{r.when}</div>
                </div>
                <GoogleG size={18} />
              </header>
              <Stars size={15} />
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-secondary)', flex: 1 }}>{r.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { GoogleReviews });


/* ── SMD Detailing · Homepage Sections ── */

function BookingStrip() {
  const bookingDate = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 28);
    const mon = d.toLocaleDateString('en-IE', { day: 'numeric', month: 'long' });
    return mon;
  }, []);

  return (
    <div style={{
      background: 'var(--accent)',
      padding: '18px clamp(20px,5vw,40px)',
      textAlign: 'center',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(0.85rem, 2vw, 1rem)',
        fontWeight: 600,
        color: 'var(--accent-text)',
        letterSpacing: '0.06em',
      }}>
        Currently booking week of {bookingDate}
      </span>
    </div>
  );
}

function WhatIDontDo({ cardStyle = 'bordered' }) {
  const items = [
    { title: "I don't use sponges", desc: "They hold grit and swirl your paint. Two-bucket method with microfibre only." },
    { title: "I don't quote through DMs", desc: "Published prices, always. What you see is what you pay." },
    { title: "I don't rush", desc: "Your car gets however long it needs. That's why I only take one car at a time." },
    { title: "I don't cut corners", desc: "Every panel, every seal, every time. The places nobody checks are the places I check first." },
    { title: "I don't subcontract", desc: "I do every car myself. My name, my work, my standards." },
  ];

  return (
    <Section id="what-i-dont-do">
      <Reveal>
        <SectionLabel>Standards</SectionLabel>
        <SectionTitle>What I Don't Do</SectionTitle>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginTop: '12px',
      }}>
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div style={{
              ...getCardStyle(cardStyle),
              padding: '28px 24px',
              display: 'flex', gap: '16px', alignItems: 'flex-start',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem', fontWeight: 700,
                color: 'var(--accent)',
                flexShrink: 0, marginTop: '2px',
              }}>✕</span>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem', fontWeight: 600,
                  marginBottom: '6px',
                }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WeddingPack({ navigate, cardStyle = 'bordered' }) {
  return (
    <FullSection style={{ background: 'var(--bg-elevated)' }}>
      <Reveal>
        <div style={{
          ...getCardStyle(cardStyle),
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          overflow: 'hidden',
          padding: 0,
        }}>
          <LazyImg
            src={IMAGES.wedding}
            alt="Classic Mini detailed to a show finish"
            style={{ minHeight: '300px' }}
          />
          <div style={{ padding: 'clamp(28px,5vw,48px)' }}>
            <SectionLabel>Special Occasion</SectionLabel>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700, marginBottom: '16px',
            }}>Wedding Pack</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Your wedding car deserves to look its best. The standalone Wedding Pack includes everything in the
              Deluxe Detail, plus ribboning so the car is ready for the day. Or add the wedding finish to any package.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Standalone</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>€450–650</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Add-on</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>+€60</div>
              </div>
            </div>
            <Btn onClick={() => navigate('book', { package: 'wedding' })}>Enquire About Wedding Pack</Btn>
          </div>
        </div>
      </Reveal>
    </FullSection>
  );
}

function CommercialStrip({ navigate }) {
  return (
    <Section>
      <Reveal>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '24px',
          padding: '36px 32px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div>
            <SectionLabel>B2B</SectionLabel>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              fontWeight: 700,
            }}>Commercial Programme</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', maxWidth: '440px' }}>
              Weekly slots, reliable turnaround, volume-ready. I work with dealers, garages, fleets and businesses across Donegal.
            </p>
          </div>
          <Btn variant="outline" onClick={() => navigate('commercial')}>Learn More</Btn>
        </div>
      </Reveal>
    </Section>
  );
}

function CoverageArea() {
  const towns = ['Ballybofey', 'Stranorlar', 'Letterkenny', 'Donegal Town', 'Killybegs', 'Ardara', 'Glenties', 'Raphoe', 'Convoy', 'Lifford', 'Castlefinn', 'Dungloe'];

  return (
    <Section id="coverage">
      <Reveal>
        <SectionLabel>Coverage</SectionLabel>
        <SectionTitle>Serving Donegal</SectionTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '480px' }}>
          Based in Ballybofey, serving the Twin Towns and beyond. Drop your car to me and collect it when it's done.
        </p>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '12px',
      }}>
        {towns.map((town, i) => (
          <Reveal key={town} delay={i * 0.04}>
            <div style={{
              padding: '16px 20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 500,
              textAlign: 'center',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {town}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function PressStrip() {
  const outlets = [
    { name: 'Donegal News', logo: '/images/press/donegal-news.png' },
    { name: 'Highland Radio', logo: '/images/press/highland-radio.png' },
    { name: 'Finn Valley Voice', logo: '/images/press/finn-valley-voice.png' },
    { name: 'Donegal Daily', logo: '/images/press/donegal-daily.svg', invert: true },
  ];

  return (
    <FullSection style={{ background: 'var(--bg-elevated)' }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}>As Featured In</span>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: 'clamp(32px, 6vw, 72px)',
          alignItems: 'flex-start',
        }}>
          {outlets.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.08}>
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '12px',
                opacity: 0.85,
              }}>
                <img src={o.logo} alt={`${o.name} logo`} loading="lazy" style={{
                  height: '40px', width: 'auto', maxWidth: '180px', objectFit: 'contain',
                  filter: o.invert ? 'brightness(0) invert(1)' : 'none',
                }} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem', fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                }}>{o.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </FullSection>
  );
}

function SocialProof() {
  return (
    <Section>
      <Reveal>
        <SectionLabel>Follow the Work</SectionLabel>
        <SectionTitle>On Social</SectionTitle>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px',
      }}>
        {[IMAGES.car1, IMAGES.car2, IMAGES.car3, IMAGES.car4, IMAGES.car5, IMAGES.car6].map((src, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              aspectRatio: '1',
            }}
              onMouseEnter={e => { e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; e.currentTarget.querySelector('.overlay').style.opacity = 1; }}
              onMouseLeave={e => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; e.currentTarget.querySelector('.overlay').style.opacity = 0; }}
            >
              <img src={src} alt={`Detail work ${i + 1}`} loading="lazy" style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }} />
              <div className="overlay" style={{
                position: 'absolute', inset: 0,
                background: 'rgba(12,11,9,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.3s ease',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em' }}>VIEW</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA({ navigate }) {
  return (
    <FullSection style={{
      background: 'var(--bg-elevated)',
      textAlign: 'center',
    }}>
      <Reveal>
        <GoldLine width="40px" style={{ margin: '0 auto 24px' }} />
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          fontWeight: 700,
          marginBottom: '16px',
        }}>
          Ready to Get on the List?
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          maxWidth: '480px',
          margin: '0 auto 32px',
        }}>
          Spaces fill up fast. The sooner you enquire, the sooner your car gets the care it deserves.
        </p>
        <Btn size="lg" onClick={() => navigate('book')}>Book Your Detail</Btn>
      </Reveal>
    </FullSection>
  );
}

function Stats() {
  const ref = React.useRef();
  const inView = useInView(ref);
  const carsDetailed = useCountUp(200, 1500, inView);
  const repeatRate = useCountUp(85, 1500, inView);

  return (
    <div ref={ref} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '24px',
      padding: '48px clamp(20px,5vw,40px)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
    }}>
      {[
        { val: `${carsDetailed}+`, label: 'Cars Detailed' },
        { val: `${repeatRate}%`, label: 'Repeat Clients' },
        { val: 'High', label: 'Demand' },
        { val: '1st', label: 'All-Ireland' },
      ].map((stat, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '6px',
            }}>{stat.val}</div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
            }}>{stat.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

Object.assign(window, {
  BookingStrip, WhatIDontDo, WeddingPack, CommercialStrip,
  CoverageArea, PressStrip, SocialProof, FinalCTA, Stats,
});
