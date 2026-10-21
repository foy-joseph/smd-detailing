/* ── SMD Detailing · Gallery Page ── */

function GalleryPage({ navigate }) {
  const [filter, setFilter] = React.useState('all');
  const [lightbox, setLightbox] = React.useState(null);

  const categories = ['all', 'full valet', 'mini valet', 'deluxe detail', 'wedding'];

  const items = [
    { src: IMAGES.car1, alt: 'VW Tiguan R-Line after full valet', cat: 'full valet', title: 'VW Tiguan R-Line — Full Valet', desc: 'Full exterior and interior detail' },
    { src: IMAGES.car2, alt: 'Classic Mini and Morris Minor Traveller detailed together', cat: 'deluxe detail', title: 'Classic Mini & Morris Minor — Deluxe Detail', desc: 'Two classics, show-ready' },
    { src: IMAGES.car3, alt: 'Audi A3 saloon after full valet', cat: 'full valet', title: 'Audi A3 — Full Valet', desc: 'Clay bar + full interior deep clean' },
    { src: IMAGES.car4, alt: 'Kia Sorento after full valet', cat: 'full valet', title: 'Kia Sorento — Full Valet', desc: 'Deep clean, trim dressed, glass crystal-clear' },
    { src: IMAGES.car5, alt: 'Kia Sportage after mini valet', cat: 'mini valet', title: 'Kia Sportage — Mini Valet', desc: 'Exterior wash + interior refresh' },
    { src: IMAGES.car6, alt: 'Classic Mini in snow foam', cat: 'deluxe detail', title: 'Classic Mini — Decontamination', desc: 'Snow foam pre-wash before hand work' },
    { src: IMAGES.wedding, alt: 'Classic Mini with show finish', cat: 'wedding', title: 'Classic Mini — Show Finish', desc: 'The finish your wedding car gets' },
    { src: IMAGES.detail1, alt: 'VW Golf interior after deep clean', cat: 'full valet', title: 'VW Golf — Interior', desc: 'Interior extraction + deep clean' },
    { src: IMAGES.workshop, alt: 'Range Rover covered in snow foam', cat: 'mini valet', title: 'Range Rover — In Progress', desc: 'Snow foam decontamination stage' },
  ];

  const filtered = filter === 'all' ? items : items.filter(i => i.cat === filter);

  return (
    <div style={{ paddingTop: '100px' }}>
      <Section>
        <Reveal>
          <SectionLabel>Gallery</SectionLabel>
          <SectionTitle style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            The Work <span style={{ color: 'var(--accent)' }}>Speaks</span>
          </SectionTitle>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '500px', marginBottom: '32px' }}>
            Every car tells a story. Here's what happens when craft meets care.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '8px',
            marginBottom: '40px',
          }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                background: filter === cat ? 'var(--accent)' : 'var(--bg-card)',
                color: filter === cat ? 'var(--accent-text)' : 'var(--text-secondary)',
                border: filter === cat ? '1px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: '100px',
                padding: '8px 20px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.82rem', fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'capitalize',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '44px',
              }}>{cat}</button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {filtered.map((item, i) => (
            <Reveal key={item.src + filter} delay={i * 0.06}>
              <div
                onClick={() => setLightbox(item)}
                style={{
                  position: 'relative', overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  background: 'var(--bg-card)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                  e.currentTarget.querySelector('.g-info').style.opacity = 1;
                  e.currentTarget.querySelector('.g-info').style.transform = 'translateY(0)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  e.currentTarget.querySelector('.g-info').style.opacity = 0;
                  e.currentTarget.querySelector('.g-info').style.transform = 'translateY(8px)';
                }}
              >
                <img src={item.src} alt={item.alt} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(.22,1,.36,1)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(12,11,9,0.85) 100%)',
                }}></div>
                <div className="g-info" style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px',
                  opacity: 0, transform: 'translateY(8px)',
                  transition: 'all 0.3s ease',
                }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
                <Badge style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  {item.cat}
                </Badge>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Before/After promo */}
        <Reveal delay={0.2} style={{ marginTop: '60px' }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(32px,5vw,48px)',
            textAlign: 'center',
          }}>
            <SectionLabel>Follow the Work</SectionLabel>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
              Follow Me on Socials
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 24px' }}>
              Before and after photos, process breakdowns and detailing tips — new work posted every week.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {SOCIALS.map(s => (
                <Btn key={s.name} variant="outline" size="sm" onClick={() => window.open(s.url, '_blank', 'noopener')} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <SocialIcon name={s.name} size={16} /> {s.name}
                </Btn>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div style={{ maxWidth: '900px', width: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} style={{
              width: '100%', borderRadius: 'var(--radius-lg)',
              maxHeight: '80vh', objectFit: 'contain',
            }} />
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600 }}>{lightbox.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>{lightbox.desc}</p>
            </div>
            <button onClick={() => setLightbox(null)} style={{
              position: 'absolute', top: '-16px', right: '-16px',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '50%', width: '40px', height: '40px',
              color: 'var(--text-primary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem',
            }}>×</button>
          </div>
        </div>
      )}

      <FinalCTA navigate={navigate} />
    </div>
  );
}

Object.assign(window, { GalleryPage });


/* ── SMD Detailing · Booking Page ── */

const BOOK_PACKAGE_OPTIONS = [
  { value: 'mini-valet', label: 'Mini Valet — €70–90' },
  { value: 'full-valet', label: 'Full Valet — €100–160' },
  { value: 'premium-valet', label: 'Premium Valet — €180–260' },
  { value: 'deluxe-detail', label: 'Deluxe Detail — €400–600' },
  { value: 'winter-shield', label: 'Winter Shield — €120–160' },
  { value: 'winter-shield-plus', label: 'Winter Shield+ — €200–300' },
  { value: 'wedding', label: 'Wedding Pack — €450–650' },
  { value: 'wedding-addon', label: 'Wedding Pack Add-on — +€60' },
];

function packageFromUrl() {
  const v = new URLSearchParams(window.location.search).get('package');
  return BOOK_PACKAGE_OPTIONS.some(o => o.value === v) ? v : 'full-valet';
}

function BookPage({ cardStyle = 'bordered' }) {
  const [form, setForm] = React.useState({
    name: '', phone: '', email: '',
    vehicle: '', package: packageFromUrl(),
    service_type: 'drop-off',
    preferred_date: '', notes: '',
    is_dealer: false, dealer_name: '', volume: '',
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  React.useEffect(() => {
    const sync = () => setForm(f => ({ ...f, package: packageFromUrl() }));
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    if (!form.vehicle.trim()) errs.vehicle = 'Vehicle make and model is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSending(true);
    try {
      const res = await fetch('https://forms.smddetailing.com/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || 'Submission failed');
      setSending(false);
      setSubmitted(true);
    } catch (err) {
      setSending(false);
      setErrors({ _form: "Couldn't send your booking. Please try again, or text 087 114 6173." });
    }
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Section style={{ textAlign: 'center', maxWidth: '500px' }}>
          <Reveal>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>◆</div>
            <SectionTitle>You're on the List</SectionTitle>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Thanks, {form.name.split(' ')[0]}. I'll get in touch within 24 hours.
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
          {/* Form */}
          <div>
            <Reveal>
              <SectionTitle>Book a Detail</SectionTitle>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
                Fill in the details below and I'll get in touch within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <FormField label="Full Name" error={errors.name}>
                  <FormInput value={form.name} onChange={v => update('name', v)} placeholder="Your name" />
                </FormField>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormField label="Phone" error={errors.phone}>
                    <FormInput value={form.phone} onChange={v => update('phone', v)} placeholder="087 114 6173" type="tel" />
                  </FormField>
                  <FormField label="Email" error={errors.email}>
                    <FormInput value={form.email} onChange={v => update('email', v)} placeholder="you@email.com" type="email" />
                  </FormField>
                </div>

                <FormField label="Vehicle Make & Model" error={errors.vehicle}>
                  <FormInput value={form.vehicle} onChange={v => update('vehicle', v)} placeholder="e.g. VW Golf 2022" />
                </FormField>

                <FormField label="Package">
                  <FormSelect value={form.package} onChange={v => update('package', v)} options={BOOK_PACKAGE_OPTIONS} />
                </FormField>


                <FormField label="When are you hoping for? (optional)">
                  <FormInput value={form.preferred_date} onChange={v => update('preferred_date', v)} placeholder="e.g. a Saturday in late November, or whenever you've a weekend slot" />
                </FormField>

                <FormField label="Notes (optional)">
                  <textarea
                    value={form.notes}
                    onChange={e => update('notes', e.target.value)}
                    placeholder="Anything I should know — pet hair, kids' seats, specific concerns…"
                    rows={3}
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

          {/* Sidebar info */}
          <Reveal delay={0.2}>
            <div style={{
              position: 'sticky', top: '120px',
              display: 'flex', flexDirection: 'column', gap: '24px',
            }}>
              <div style={{ ...getCardStyle(cardStyle), padding: '28px 24px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>What Happens Next</h4>
                {[
                  { step: '1', text: "You submit this form" },
                  { step: '2', text: "I get in touch within 24 hours" },
                  { step: '3', text: "We confirm your date and package" },
                  { step: '4', text: "Your car gets the care it deserves" },
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

/* ── Form helpers ── */
function FormField({ label, error, children }) {
  return (
    <div>
      <label style={{
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontSize: '0.8rem', fontWeight: 600,
        letterSpacing: '0.06em',
        color: 'var(--text-secondary)',
        marginBottom: '8px',
      }}>{label}</label>
      {children}
      {error && <span style={{ fontSize: '0.8rem', color: '#e05252', marginTop: '4px', display: 'block' }}>{error}</span>}
    </div>
  );
}

function FormInput({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      type={type} value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        padding: '12px 16px',
        outline: 'none',
        transition: 'border-color 0.2s',
        minHeight: '44px',
      }}
      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
      onBlur={e => e.target.style.borderColor = 'var(--border)'}
    />
  );
}

function FormSelect({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        width: '100%',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        padding: '12px 16px',
        outline: 'none',
        cursor: 'pointer',
        minHeight: '44px',
        WebkitAppearance: 'none',
        appearance: 'none',
      }}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

Object.assign(window, { BookPage, FormField, FormInput, FormSelect });
