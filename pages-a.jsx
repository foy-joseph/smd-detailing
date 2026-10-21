/* ── SMD Detailing · Services Page ── */

function ServicesPage({ navigate, cardStyle = 'bordered' }) {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    { q: 'How far in advance do I need to book?', a: "I'm usually booked up in advance. The sooner you get in touch, the sooner I can slot you in. I'll always confirm your date within 24 hours." },
    { q: 'Do I drop the car off to you?', a: "Yes. I work from Ballybofey and don't offer mobile detailing — every car is done in one place, with the right setup and the right light. Drop it to me, and I'll let you know when it's ready to collect." },
    { q: 'What products do you use?', a: "Autosmart, Koch Chemie and CarPro. Professional-grade products that protect properly and last. No supermarket car wash soap touching your paint." },
    { q: "What's the difference between a valet and a detail?", a: "A valet cleans your car. A detail corrects and protects it. The Mini Valet is a thorough valet. The Deluxe Detail is a full paint correction and ceramic coating — it's a different category of work entirely." },
    { q: 'Can you remove scratches and swirl marks?', a: "Yes. The Deluxe Detail includes multi-stage paint correction for swirl marks and deeper scratches. I'll always be honest about what's achievable." },
    { q: 'Do you do ceramic coating?', a: "Yes — a professional ceramic coating is included in the Deluxe Detail, and the Full Valet comes with a 3-month ceramic sealant. I don't offer the full coating as a standalone because proper coating requires proper prep." },
    { q: 'What happens if something goes wrong?', a: "I take the utmost care with every vehicle. I'll walk through the car with you before and after, and I stand behind my work." },
  ];

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero area */}
      <Section>
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <SectionTitle style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
            Four Levels of Care.<br />
            <span style={{ color: 'var(--accent)' }}>Published Prices.</span>
          </SectionTitle>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
            I don't hide behind DMs. Pick the level your car needs, and I'll give it exactly that — nothing more, nothing less.
          </p>
        </Reveal>
      </Section>

      {/* Detailed packages */}
      <Section style={{ paddingTop: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.tier} delay={i * 0.1}>
              <ServiceDetailCard pkg={pkg} navigate={navigate} cardStyle={cardStyle} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Wedding Pack full */}
      <WeddingPack navigate={navigate} cardStyle={cardStyle} />

      {/* FAQ */}
      <Section>
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Common Questions</SectionTitle>
        </Reveal>

        <div style={{ maxWidth: '720px', marginTop: '12px' }}>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <FaqItem
                faq={faq}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA navigate={navigate} />
    </div>
  );
}

function ServiceDetailCard({ pkg, navigate, cardStyle }) {
  const extras = {
    'Mini Valet': {
      desc: "The foundation. A thorough hand wash and interior clean that treats your car properly — no sponges, no shortcuts. Perfect as a regular maintenance detail.",
      details: ['Exterior: Two-bucket hand wash, wheel faces cleaned, tyre dressing, glass polished', 'Interior: Full vacuum, dashboard and console wiped, door cards and sills cleaned'],
    },
    'Full Valet': {
      desc: "The one most people want. Everything in the Mini Valet plus clay bar decontamination and a full interior deep clean. Your car comes back feeling new.",
      details: ['Exterior: Everything in Mini Valet + tar removal, 3-month ceramic sealant, trim dressed', 'Interior: Deep clean with extraction, leather conditioned, plastics restored, glass crystal-clear'],
    },
    'Premium Valet': {
      desc: "The step up from the Full Valet. The engine bay gets detailed, the leather gets properly rejuvenated, every plastic gets UV protection, and the paint gets a hand polish and wax. For cars that deserve more than a clean.",
      details: ['Exterior: Everything in Full Valet + engine bay detail, hand polish and wax', 'Interior: Leather rejuvenation, UV protection on all plastics'],
    },
    'Deluxe Detail': {
      desc: "The full works. Multi-stage paint correction removes years of swirl marks and scratches. A professional ceramic coating protects the result for years. This is the detail that makes people ask if you bought a new car.",
      details: ['Exterior: Multi-stage paint correction, professional ceramic coating, trim fully restored, exhaust tips mirror-polished', 'Interior: Everything in Premium Valet + interior protection applied, final inspection under lights'],
    },
  };

  const extra = extras[pkg.tier] || {};

  return (
    <div style={{
      ...getCardStyle(cardStyle),
      padding: 0,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    }}>
      {/* Left: info */}
      <div style={{ padding: 'clamp(28px,4vw,44px)' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>{pkg.eyebrow}</span>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
          fontWeight: 700, marginTop: '8px', marginBottom: '4px',
        }}>{pkg.tier}</h3>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>€{pkg.priceFrom}–{pkg.priceTo}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pkg.duration}</span>
        </div>

        {pkg.popular && <Badge style={{ marginBottom: '16px' }}>Most Popular</Badge>}

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px', marginTop: '16px' }}>
          {extra.desc}
        </p>

        <Btn onClick={() => navigate('book')}>Book {pkg.tier}</Btn>
      </div>

      {/* Right: inclusions */}
      <div style={{
        background: 'var(--bg)',
        padding: 'clamp(28px,4vw,44px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.8rem', fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: '20px',
        }}>What's Included</h4>

        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {pkg.includes.map((item, j) => (
            <li key={j} style={{
              display: 'flex', gap: '10px', alignItems: 'flex-start',
              fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5,
            }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.7rem', marginTop: '5px', flexShrink: 0 }}>◆</span>
              {item}
            </li>
          ))}
        </ul>

        {extra.details && (
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
            {extra.details.map((d, k) => (
              <p key={k} style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '8px' }}>{d}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={onClick} style={{
        width: '100%', background: 'none', border: 'none', cursor: 'pointer',
        padding: '20px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
        textAlign: 'left',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem', fontWeight: 600,
          color: isOpen ? 'var(--accent)' : 'var(--text-primary)',
          transition: 'color 0.2s',
        }}>{faq.q}</span>
        <span style={{
          color: 'var(--accent)',
          fontSize: '1.2rem',
          fontWeight: 300,
          transform: isOpen ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.3s ease',
          flexShrink: 0,
        }}>+</span>
      </button>
      <div style={{
        maxHeight: isOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          fontSize: '0.9rem', color: 'var(--text-secondary)',
          lineHeight: 1.7, paddingBottom: '20px', maxWidth: '600px',
        }}>{faq.a}</p>
      </div>
    </div>
  );
}

Object.assign(window, { ServicesPage });


/* ── SMD Detailing · About Page ── */

function AboutPage({ navigate }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <Section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}>
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700, marginBottom: '24px', lineHeight: 1.1,
            }}>
              I Take More Care of<br />
              <span style={{ color: 'var(--accent)' }}>Your Car Than My Own</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>
              I'm Shay McDevitt, and I run SMD Detailing from Ballybofey, Co. Donegal.
              I started detailing because I couldn't find anyone locally who treated cars the way I wanted mine treated — 
              with real products, real care, and real time.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              I do every single car myself. No team, no subcontractors.
              When you book SMD, you get me — and I give your car however long it needs.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <LazyImg
              src={IMAGES.shay}
              alt="Shay McDevitt, SMD Detailing, at the Student Enterprise Programme national final"
              style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)' }}
            />
          </Reveal>
        </div>
      </Section>

      {/* Timeline */}
      <FullSection style={{ background: 'var(--bg-elevated)' }}>
        <Reveal>
          <SectionLabel>The Journey</SectionLabel>
          <SectionTitle>How SMD Got Here</SectionTitle>
        </Reveal>

        <div style={{ maxWidth: '680px', marginTop: '24px' }}>
          {[
            {
              year: '2024',
              title: 'First Detail',
              desc: "Started with my dad's car and a bucket of proper products. Friends noticed. Then their parents noticed.",
            },
            {
              year: '2025',
              title: 'Transition Year Mini Company',
              desc: "Turned what I was already doing into a real business through the TY mini-company programme. Proper branding, proper systems.",
            },
            {
              year: '2026',
              title: 'All-Ireland 1st Place',
              desc: "Won 1st place at the All-Ireland Mini Company Awards. Judged on business plan, financials, branding, and the product itself.",
            },
            {
              year: '2026',
              title: 'North Macedonia — International Final',
              desc: "Selected to represent Ireland at the international mini-company competition in North Macedonia, October 2026. Competing against the best young businesses in Europe.",
            },
            {
              year: 'Now',
              title: 'In Demand',
              desc: "Currently running at capacity. One car at a time, every car done right. The demand speaks for itself.",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '24px',
                paddingBottom: '32px',
                marginBottom: '32px',
                borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem', fontWeight: 700,
                  color: 'var(--accent)',
                  paddingTop: '3px',
                }}>{item.year}</div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem', fontWeight: 600,
                    marginBottom: '8px',
                  }}>{item.title}</h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem', lineHeight: 1.7,
                  }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </FullSection>

      {/* Products */}
      <Section>
        <Reveal>
          <SectionLabel>Products</SectionLabel>
          <SectionTitle>What I Use — And Why</SectionTitle>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '580px', marginBottom: '36px' }}>
            I don't use supermarket products. Every product in my kit is professional-grade, chosen because it performs — not because it's cheap.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {[
            { brand: 'Autosmart', desc: 'Trade-grade cleaning chemicals used by professional valeters across Ireland and the UK. Strong where it needs to be, safe on every surface.', tag: 'Cleaning' },
            { brand: 'Koch Chemie', desc: 'German professional detailing chemistry — polishes, compounds and finishing products trusted in body shops and detailing studios worldwide.', tag: 'Polish' },
            { brand: 'CarPro', desc: 'Ceramic coatings, sealants and decontamination products. The protection that keeps a finished car looking finished.', tag: 'Protection' },
          ].map((prod, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                height: '100%',
              }}>
                <Badge style={{ marginBottom: '16px' }}>{prod.tag}</Badge>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem', fontWeight: 700,
                  marginBottom: '10px',
                }}>{prod.brand}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{prod.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quote */}
      <FullSection style={{ background: 'var(--bg-elevated)', textAlign: 'center' }}>
        <Reveal>
          <GoldLine width="40px" style={{ margin: '0 auto 32px' }} />
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
            fontWeight: 600,
            fontStyle: 'italic',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.4,
            color: 'var(--text-primary)',
          }}>
            "The places nobody checks are the places I check first."
          </blockquote>
          <p style={{
            color: 'var(--accent)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginTop: '20px',
            letterSpacing: '0.08em',
          }}>— Shay McDevitt</p>
        </Reveal>
      </FullSection>

      <FinalCTA navigate={navigate} />
    </div>
  );
}

Object.assign(window, { AboutPage });
