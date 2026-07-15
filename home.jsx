/* ── SMD Detailing · Pricing Cards + Comparison ── */

const PACKAGES = [
  {
    eyebrow: 'The Weekly',
    tier: 'Mini Valet',
    priceFrom: 60,
    priceTo: 80,
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
    priceFrom: 80,
    priceTo: 120,
    duration: '5–8 hours',
    popular: true,
    desc: "The one most people want. Everything in the Mini Valet, plus decontamination and a full interior deep clean.",
    includes: [
      'Everything in Mini Valet, plus:',
      'Clay bar decontamination',
      'Interior deep clean & extraction',
      'Leather conditioning',
      'Trim & plastic restoration',
      'Glass polished crystal-clear',
      'Door shuts & boot cleaned',
      'Tyre walls dressed',
    ],
  },
  {
    eyebrow: 'The Concours',
    tier: 'Deluxe Detail',
    priceFrom: 400,
    priceTo: 600,
    duration: '8–14 hours',
    popular: false,
    desc: "The full works. Multi-stage paint correction, Gtechniq ceramic coating, and an engine bay detail. The one that makes people ask if you bought a new car.",
    includes: [
      'Everything in Full Valet, plus:',
      'Multi-stage paint correction',
      'Gtechniq Crystal Serum coating',
      'Engine bay detail',
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
        <SectionLabel>Published Prices — Always</SectionLabel>
        <SectionTitle>Three Levels of Care</SectionTitle>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '560px', marginBottom: '48px' }}>
          No DMs for a quote. No hidden extras. Pick the level of care your car deserves.
        </p>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0',
        alignItems: 'stretch',
      }}>
        {PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.tier} delay={i * 0.12}>
            <PricingCard pkg={pkg} navigate={navigate} cardStyle={cardStyle} isLast={i === 2} />
          </Reveal>
        ))}
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 860px) {
          #pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-col { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .pricing-col:last-child { border-bottom: none !important; }
        }
      `}</style>
    </FullSection>
  );
}

function PricingCard({ pkg, navigate, cardStyle, isLast }) {
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
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRight: isLast ? 'none' : '1px solid var(--border)',
      }}
    >
      {/* Popular accent bar */}
      {pkg.popular && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '3px', background: 'var(--accent)',
        }}></div>
      )}

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
          fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1,
        }}>€{priceFrom}–{pkg.priceTo}</span>
      </div>

      {/* Duration */}
      <span style={{
        fontSize: '0.85rem', color: 'var(--text-muted)',
        marginBottom: '28px', display: 'block',
      }}>{pkg.duration}</span>

      {/* Popular badge */}
      {pkg.popular && (
        <Badge style={{ marginBottom: '24px', alignSelf: 'flex-start' }}>Most Popular</Badge>
      )}

      {/* CTA */}
      <Btn
        variant={pkg.popular ? 'primary' : 'outline'}
        style={{ width: '100%' }}
        onClick={() => navigate('book')}
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
    { label: 'Products used', budget: 'Unknown', bigName: 'Basic', smd: 'Gtechniq · Gyeon' },
    { label: 'Paint-safe method', budget: 'Sponge on paint', bigName: 'Varies', smd: 'Two-bucket, no sponges' },
    { label: 'Wait time', budget: 'Same day', bigName: 'Days', smd: 'In demand — book early' },
  ];

  return (
    <Section id="comparison">
      <Reveal>
        <SectionLabel>Why SMD</SectionLabel>
        <SectionTitle>How I Compare</SectionTitle>
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
              Your wedding car deserves to look its best. Full exterior detail with a ribbon-ready finish.
              Book as a standalone service or add it to any package.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Standalone</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>€150</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Add-on</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>+€60</div>
              </div>
            </div>
            <Btn onClick={() => navigate('book')}>Enquire About Wedding Pack</Btn>
          </div>
        </div>
      </Reveal>
    </FullSection>
  );
}

function DealerStrip({ navigate }) {
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
            }}>Dealer Programme</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', maxWidth: '440px' }}>
              Weekly slots, reliable turnaround, volume-ready. I work with dealers and garages across Donegal.
            </p>
          </div>
          <Btn variant="outline" onClick={() => navigate('dealers')}>Learn More</Btn>
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
          Based in Ballybofey, covering the Twin Towns and beyond. Drop-off or I come to you.
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
    { name: 'Donegal News', type: 'Print' },
    { name: 'Highland Radio', type: 'Radio' },
    { name: 'Ocean FM', type: 'Radio' },
    { name: 'Donegal Daily', type: 'Online' },
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
          justifyContent: 'center', gap: '32px',
          alignItems: 'center',
        }}>
          {outlets.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.08}>
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '6px',
                opacity: 0.4,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem', fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.02em',
                }}>{o.name}</span>
                <Badge style={{ fontSize: '0.6rem', padding: '3px 8px' }}>Coming Soon</Badge>
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
  const repeatRate = useCountUp(94, 1500, inView);

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
  BookingStrip, WhatIDontDo, WeddingPack, DealerStrip,
  CoverageArea, PressStrip, SocialProof, FinalCTA, Stats,
});
