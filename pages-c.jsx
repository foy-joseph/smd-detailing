/* ── SMD Detailing · Dealers Page ── */

function DealersPage({ navigate, cardStyle = 'bordered' }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <Section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}>
          <Reveal>
            <SectionLabel>Dealer Programme</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700, marginBottom: '24px', lineHeight: 1.1,
            }}>
              Reliable Prep Work.<br />
              <span style={{ color: 'var(--accent)' }}>Every Week.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
              I work with dealers and garages across Donegal. Weekly slots, consistent quality,
              fast turnaround. Your stock always looks its best.
            </p>
            <Btn size="lg" onClick={() => navigate('book')}>Enquire About Volume Work</Btn>
          </Reveal>
          <Reveal delay={0.15}>
            <LazyImg
              src={IMAGES.workshop}
              alt="Car dealership ready for detail"
              style={{
                borderRadius: 'var(--radius-lg)',
                aspectRatio: '16/10',
              }}
            />
          </Reveal>
        </div>
      </Section>

      {/* Why dealers choose SMD */}
      <FullSection style={{ background: 'var(--bg-elevated)' }}>
        <Reveal>
          <SectionLabel>Why Dealers Choose SMD</SectionLabel>
          <SectionTitle>Built for Volume</SectionTitle>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginTop: '16px',
        }}>
          {[
            { title: 'Dedicated Weekly Slots', desc: "Your cars get a fixed slot every week. No chasing, no waiting. I show up, I deliver, it's done." },
            { title: 'Consistent Quality', desc: "Same person, same standards, every time. You never wonder who's touching your stock." },
            { title: 'Fast Turnaround', desc: "Pre-sale prep done efficiently. Cars ready for the forecourt when you need them." },
            { title: 'Professional Care', desc: "I treat every car as if it were my own. You never wonder who's touching your stock or what products they're using." },
            { title: 'Published Pricing', desc: "Transparent rates. No surprises, no invoice shocks. We agree the scope and that's what you pay." },
            { title: 'One Point of Contact', desc: "You deal with me directly. No call centres, no account managers. Text me, I reply." },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                ...getCardStyle(cardStyle),
                padding: '28px 24px',
                height: '100%',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem', fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.15em',
                  marginBottom: '12px',
                }}>0{i + 1}</div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem', fontWeight: 600,
                  marginBottom: '8px',
                }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </FullSection>

      {/* How it works */}
      <Section>
        <Reveal>
          <SectionLabel>Process</SectionLabel>
          <SectionTitle>How It Works</SectionTitle>
        </Reveal>

        <div style={{ maxWidth: '600px', marginTop: '16px' }}>
          {[
            { step: '01', title: 'Get in touch', desc: "Fill out the enquiry form or text me directly. Tell me your typical volume and what you need." },
            { step: '02', title: "We agree terms", desc: "I'll come see your operation, understand the workflow, and we'll agree pricing and a weekly schedule." },
            { step: '03', title: 'Weekly delivery', desc: "I show up on your day, prep your stock, and deliver consistent quality every single week." },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                gap: '20px',
                paddingBottom: '28px',
                marginBottom: '28px',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem', fontWeight: 700,
                  color: 'var(--accent)',
                  opacity: 0.4,
                }}>{item.step}</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <FullSection style={{ background: 'var(--bg-elevated)', textAlign: 'center' }}>
        <Reveal>
          <GoldLine width="40px" style={{ margin: '0 auto 24px' }} />
          <SectionTitle>Let's Talk Volume</SectionTitle>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem',
            maxWidth: '480px', margin: '0 auto 28px',
          }}>
            Whether it's three cars a week or fifteen, I'll build a programme that fits your operation.
          </p>
          <Btn size="lg" onClick={() => navigate('book')}>Dealer Enquiry</Btn>
        </Reveal>
      </FullSection>
    </div>
  );
}

Object.assign(window, { DealersPage });


/* ── SMD Detailing · CMS / SEO Template Page ── */

const SEO_PAGES = {
  'letterkenny': {
    town: 'Letterkenny',
    county: 'Donegal',
    distance: '20 minutes',
    nearby: ['Ramelton', 'Milford', 'Newtown Cunningham', 'Raphoe'],
    intro: "Looking for professional car detailing in Letterkenny? I'm Shay McDevitt, and I run SMD Detailing from nearby Ballybofey — just 20 minutes away. I cover all of Letterkenny and surrounding areas with the same craft detailing service.",
  },
  'donegal-town': {
    town: 'Donegal Town',
    county: 'Donegal',
    distance: '25 minutes',
    nearby: ['Killybegs', 'Mountcharles', 'Ballyshannon', 'Bundoran'],
    intro: "Professional car detailing serving Donegal Town and south Donegal. Based in Ballybofey, I cover the full area — drop-off or mobile service available.",
  },
  'default': {
    town: 'Donegal',
    county: 'Donegal',
    distance: 'across the county',
    nearby: ['Letterkenny', 'Donegal Town', 'Killybegs', 'Dungloe', 'Ardara'],
    intro: "Professional car detailing serving all of County Donegal. Based in Ballybofey with mobile service available across the county.",
  },
};

function CMSPage({ navigate, cardStyle = 'bordered', slug = 'default' }) {
  const page = SEO_PAGES[slug] || SEO_PAGES['default'];

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: 'clamp(60px,10vw,100px) 0',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'var(--bg-elevated)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at 20% 50%, var(--accent-glow) 0%, transparent 60%)`,
            opacity: 0.5,
          }}></div>
        </div>
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 'var(--content-max)', margin: '0 auto',
          padding: '0 clamp(20px,5vw,40px)',
        }}>
          <Reveal>
            <SectionLabel>Car Detailing in {page.town}</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 700, lineHeight: 1.1, marginBottom: '20px',
            }}>
              Professional Car Detailing<br />
              <span style={{ color: 'var(--accent)' }}>in {page.town}</span>
            </h1>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '1.05rem',
              lineHeight: 1.7, maxWidth: '580px', marginBottom: '28px',
            }}>{page.intro}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Btn onClick={() => navigate('book')}>Book Now</Btn>
              <Btn variant="outline" onClick={() => navigate('services')}>View Packages</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick pricing */}
      <Section>
        <Reveal>
          <SectionLabel>Packages Available in {page.town}</SectionLabel>
          <SectionTitle>Published Prices — Always</SectionTitle>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '16px',
        }}>
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.tier} delay={i * 0.1}>
              <div style={{
                ...getCardStyle(cardStyle),
                padding: '28px 24px',
                borderColor: pkg.popular ? 'var(--accent)' : undefined,
              }}>
                {pkg.popular && <Badge style={{ marginBottom: '12px' }}>Most Popular</Badge>}
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>{pkg.eyebrow}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem', fontWeight: 700,
                  marginTop: '4px', marginBottom: '8px',
                }}>{pkg.tier}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>€{pkg.price}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{pkg.duration}</span>
                </div>
                <Btn size="sm" variant={pkg.popular ? 'primary' : 'outline'} onClick={() => navigate('book')} style={{ width: '100%' }}>
                  Book Now
                </Btn>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Local coverage */}
      <FullSection style={{ background: 'var(--bg-elevated)' }}>
        <Reveal>
          <SectionLabel>Coverage</SectionLabel>
          <SectionTitle>Serving {page.town} & Surrounds</SectionTitle>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px', marginBottom: '28px' }}>
            Based in Ballybofey, just {page.distance} from {page.town}.
            Drop your car to me or I'll come to you — mobile service available across the area.
          </p>
        </Reveal>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '12px',
          marginTop: '8px',
        }}>
          {[page.town, ...page.nearby].map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <span style={{
                padding: '10px 20px',
                background: i === 0 ? 'var(--accent-glow)' : 'var(--bg-card)',
                border: i === 0 ? '1px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: '100px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem', fontWeight: 500,
                color: i === 0 ? 'var(--accent)' : 'var(--text-secondary)',
              }}>{t}</span>
            </Reveal>
          ))}
        </div>
      </FullSection>

      {/* Why choose SMD */}
      <Section>
        <Reveal>
          <SectionLabel>Why SMD Detailing</SectionLabel>
          <SectionTitle>What Sets Me Apart</SectionTitle>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginTop: '16px',
        }}>
          {[
            { title: 'Owner-Operator', desc: "I do every car myself. No team, no hired hands. My name is on every detail." },
            { title: 'All-Ireland Winner', desc: "1st place at the All-Ireland Mini Company Awards 2026. Representing Ireland internationally." },
            { title: 'Professional Products', desc: "Gtechniq and Gyeon exclusively. Professional-grade products that protect properly." },
            { title: 'Published Prices', desc: "No DMs, no hidden fees. Published prices from €70. What you see is what you pay." },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                ...getCardStyle(cardStyle),
                padding: '28px 24px',
                height: '100%',
              }}>
                <span style={{ color: 'var(--accent)', fontSize: '1rem', display: 'block', marginBottom: '12px' }}>◆</span>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, marginBottom: '8px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Local FAQ */}
      <FullSection style={{ background: 'var(--bg-elevated)' }}>
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Car Detailing in {page.town}</SectionTitle>
        </Reveal>

        <div style={{ maxWidth: '680px', marginTop: '16px' }}>
          {[
            { q: `Do you cover ${page.town}?`, a: `Yes — I'm based in Ballybofey, just ${page.distance} from ${page.town}. I offer both drop-off and mobile service.` },
            { q: 'How far in advance do I need to book?', a: "I'm usually booked up in advance. Get in touch and I'll slot you in as soon as possible." },
            { q: 'What products do you use?', a: 'Gtechniq and Gyeon exclusively. Professional-grade products used by the best detailers worldwide.' },
          ].map((faq, i) => (
            <CMSFaqItem key={i} faq={faq} />
          ))}
        </div>
      </FullSection>

      <FinalCTA navigate={navigate} />
    </div>
  );
}

function CMSFaqItem({ faq }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', background: 'none', border: 'none', cursor: 'pointer',
        padding: '18px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
        textAlign: 'left',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem', fontWeight: 600,
          color: open ? 'var(--accent)' : 'var(--text-primary)',
          transition: 'color 0.2s',
        }}>{faq.q}</span>
        <span style={{
          color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 300,
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.3s ease', flexShrink: 0,
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? '200px' : '0',
        overflow: 'hidden', transition: 'max-height 0.3s ease',
      }}>
        <p style={{
          fontSize: '0.9rem', color: 'var(--text-secondary)',
          lineHeight: 1.7, paddingBottom: '18px',
        }}>{faq.a}</p>
      </div>
    </div>
  );
}

Object.assign(window, { CMSPage, SEO_PAGES });
