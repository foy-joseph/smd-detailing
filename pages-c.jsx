/* ── SMD Detailing · Commercial Page ── */

function CommercialPage({ navigate, cardStyle = 'bordered' }) {
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
            <SectionLabel>Commercial Programme</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700, marginBottom: '24px', lineHeight: 1.1,
            }}>
              Reliable Prep Work.<br />
              <span style={{ color: 'var(--accent)' }}>Every Week.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
              I work with dealers, garages, fleets and businesses across Donegal. Weekly slots, consistent quality,
              fast turnaround. Your vehicles always look their best.
            </p>
            <Btn size="lg" onClick={() => navigate('commercial-enquiry')}>Enquire About Volume Work</Btn>
          </Reveal>
          <Reveal delay={0.15}>
            <LazyImg
              src={IMAGES.workshop}
              alt="Range Rover mid snow-foam decontamination"
              style={{
                borderRadius: 'var(--radius-lg)',
                aspectRatio: '16/10',
              }}
            />
          </Reveal>
        </div>
      </Section>

      {/* Why businesses choose SMD */}
      <FullSection style={{ background: 'var(--bg-elevated)' }}>
        <Reveal>
          <SectionLabel>Why Businesses Choose SMD</SectionLabel>
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
            { title: 'Consistent Quality', desc: "Same person, same standards, every time. You never wonder who's touching your vehicles." },
            { title: 'Fast Turnaround', desc: "Pre-sale prep, fleet turnarounds or regular upkeep — done efficiently and ready when you need them." },
            { title: 'Professional Care', desc: "I treat every vehicle as if it were my own. You always know who's doing the work and what products they're using." },
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
            { step: '03', title: 'Weekly delivery', desc: "I show up on your day, work through your vehicles, and deliver consistent quality every single week." },
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
          <Btn size="lg" onClick={() => navigate('commercial-enquiry')}>Commercial Enquiry</Btn>
        </Reveal>
      </FullSection>
    </div>
  );
}

Object.assign(window, { CommercialPage });


/* ── SMD Detailing · Commercial Enquiry Page ── */

function CommercialEnquiryPage({ cardStyle = 'bordered' }) {
  const [form, setForm] = React.useState({
    dealer_name: '', name: '', phone: '', email: '',
    business_type: 'dealer', volume: '', notes: '',
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  const businessTypes = [
    { value: 'dealer', label: 'Car dealer' },
    { value: 'garage', label: 'Garage / workshop' },
    { value: 'fleet', label: 'Fleet or company vehicles' },
    { value: 'rental', label: 'Rental / taxi / hire' },
    { value: 'other', label: 'Other business' },
  ];

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const errs = {};
    if (!form.dealer_name.trim()) errs.dealer_name = 'Business name is required';
    if (!form.name.trim()) errs.name = 'Contact name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    const typeLabel = (businessTypes.find(b => b.value === form.business_type) || {}).label || form.business_type;
    try {
      const res = await fetch('https://forms.smddetailing.com/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, phone: form.phone, email: form.email,
          vehicle: typeLabel,
          package: 'commercial',
          service_type: 'drop-off',
          preferred_date: '',
          notes: form.notes,
          is_dealer: true,
          dealer_name: form.dealer_name,
          volume: form.volume,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || 'Submission failed');
      setSending(false);
      setSubmitted(true);
    } catch (err) {
      setSending(false);
      setErrors({ _form: "Couldn't send your enquiry. Please try again, or text 087 114 6173." });
    }
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Section style={{ textAlign: 'center', maxWidth: '520px' }}>
          <Reveal>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>◆</div>
            <SectionTitle>Thanks, {form.name.split(' ')[0]}</SectionTitle>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              I'll get in touch within 24 hours to talk through what {form.dealer_name} needs.
            </p>
            <GoldLine width="40px" style={{ margin: '24px auto 0' }} />
          </Reveal>
        </Section>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <Section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>
          <div>
            <Reveal>
              <SectionTitle>Commercial Enquiry</SectionTitle>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
                Tell me about your operation and roughly how many vehicles you're dealing with. I'll get in touch within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <FormField label="Business Name" error={errors.dealer_name}>
                  <FormInput value={form.dealer_name} onChange={v => update('dealer_name', v)} placeholder="Business name" />
                </FormField>

                <FormField label="Your Name" error={errors.name}>
                  <FormInput value={form.name} onChange={v => update('name', v)} placeholder="Contact name" />
                </FormField>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormField label="Phone" error={errors.phone}>
                    <FormInput value={form.phone} onChange={v => update('phone', v)} placeholder="087 114 6173" type="tel" />
                  </FormField>
                  <FormField label="Email" error={errors.email}>
                    <FormInput value={form.email} onChange={v => update('email', v)} placeholder="you@business.ie" type="email" />
                  </FormField>
                </div>

                <FormField label="Type of Business">
                  <FormSelect value={form.business_type} onChange={v => update('business_type', v)} options={businessTypes} />
                </FormField>

                <FormField label="Approx. Vehicles per Week">
                  <FormInput value={form.volume} onChange={v => update('volume', v)} placeholder="e.g. 3–5 cars" />
                </FormField>

                <FormField label="What do you need? (optional)">
                  <textarea
                    value={form.notes}
                    onChange={e => update('notes', e.target.value)}
                    placeholder="Pre-sale prep, regular upkeep, one-off fleet clean, turnaround times…"
                    rows={4}
                    style={{
                      width: '100%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      padding: '12px 16px',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  ></textarea>
                </FormField>

                {errors._form && (
                  <div role="alert" style={{
                    padding: '12px 16px', borderRadius: '6px',
                    background: 'rgba(220,80,80,0.08)',
                    border: '1px solid rgba(220,80,80,0.3)',
                    color: '#e89090', fontSize: '0.88rem', marginTop: '4px',
                  }}>
                    {errors._form}
                  </div>
                )}
                <Btn size="lg" style={{ width: '100%', marginTop: '8px', opacity: sending ? 0.7 : 1 }}>
                  {sending ? 'Sending…' : 'Request a callback'}
                </Btn>
              </form>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ ...getCardStyle(cardStyle), padding: '28px 24px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>What Happens Next</h4>
                {[
                  { step: '1', text: "You send this enquiry" },
                  { step: '2', text: "I get in touch within 24 hours" },
                  { step: '3', text: "I come see your operation and we agree scope and pricing" },
                  { step: '4', text: "Your weekly slot is locked in" },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700,
                      color: 'var(--accent)', background: 'var(--accent-glow)',
                      width: '28px', height: '28px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>{s.step}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingTop: '3px' }}>{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { CommercialEnquiryPage });


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
    intro: "Professional car detailing serving Donegal Town and south Donegal. Based in Ballybofey, an easy drop-off from anywhere in the area.",
  },
  'default': {
    town: 'Donegal',
    county: 'Donegal',
    distance: 'across the county',
    nearby: ['Letterkenny', 'Donegal Town', 'Killybegs', 'Dungloe', 'Ardara'],
    intro: "Professional car detailing serving all of County Donegal. Based in Ballybofey, with customers dropping off from right across the county.",
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
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>€{pkg.priceFrom}–{pkg.priceTo}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{pkg.duration}</span>
                </div>
                <Btn size="sm" variant={pkg.popular ? 'primary' : 'outline'} onClick={() => navigate('book', { package: pkg.value })} style={{ width: '100%' }}>
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
            Drop your car to me in Ballybofey and collect it when it's done.
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
            { title: 'Professional Products', desc: "Autosmart, Koch Chemie and CarPro. Professional-grade products that protect properly." },
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
            { q: `Do you cover ${page.town}?`, a: `Yes — I'm based in Ballybofey, just ${page.distance} from ${page.town}. Drop your car to me and collect it when it's done.` },
            { q: 'How far in advance do I need to book?', a: "I'm usually booked up in advance. Get in touch and I'll slot you in as soon as possible." },
            { q: 'What products do you use?', a: 'Autosmart, Koch Chemie and CarPro. Professional-grade products used by the best detailers worldwide.' },
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
