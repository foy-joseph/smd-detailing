/* ── SMD Detailing · Gallery Page ── */

function GalleryPage({ navigate }) {
  const [filter, setFilter] = React.useState('all');
  const [lightbox, setLightbox] = React.useState(null);

  const categories = ['all', 'full valet', 'mini valet', 'concours', 'wedding'];

  const items = [
    { src: IMAGES.car1, alt: 'VW Tiguan R-Line after full valet', cat: 'full valet', title: 'VW Tiguan R-Line — Full Valet', desc: 'Full exterior and interior detail' },
    { src: IMAGES.car2, alt: 'Classic Mini and Morris Minor Traveller detailed together', cat: 'concours', title: 'Classic Mini & Morris Minor — Concours', desc: 'Two classics, show-ready' },
    { src: IMAGES.car3, alt: 'Audi A3 saloon after full valet', cat: 'full valet', title: 'Audi A3 — Full Valet', desc: 'Clay bar + full interior deep clean' },
    { src: IMAGES.car4, alt: 'Kia Sorento after full valet', cat: 'full valet', title: 'Kia Sorento — Full Valet', desc: 'Deep clean, trim dressed, glass crystal-clear' },
    { src: IMAGES.car5, alt: 'Kia Sportage after mini valet', cat: 'mini valet', title: 'Kia Sportage — Mini Valet', desc: 'Exterior wash + interior refresh' },
    { src: IMAGES.car6, alt: 'Classic Mini in snow foam', cat: 'concours', title: 'Classic Mini — Decontamination', desc: 'Snow foam pre-wash before hand work' },
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
            <SectionLabel>Before & After</SectionLabel>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
              See the Transformation
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 24px' }}>
              Follow my work on TikTok and Instagram for before/after videos, process breakdowns, and detailing tips.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Btn variant="outline" size="sm">TikTok</Btn>
              <Btn variant="outline" size="sm">Instagram</Btn>
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

function BookPage({ cardStyle = 'bordered' }) {
  const [form, setForm] = React.useState({
    name: '', phone: '', email: '',
    vehicle: '', package: 'the-service',
    service_type: 'drop-off',
    preferred_date: '', notes: '',
    is_dealer: false, dealer_name: '', volume: '',
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);

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
    if (form.is_dealer && !form.dealer_name.trim()) errs.dealer_name = 'Dealership name is required';
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
      const res = await fetch('https://smd-detailing-forms.arcadia-digital.workers.dev/book', {
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
              Thanks, {form.name.split(' ')[0]}. I'll get back to you within 24 hours to confirm your date.
            </p>
            <GoldLine width="40px" style={{ margin: '24px auto 0' }} />
          </Reveal>
        </Section>
      </div>
    );
  }

  const packages = [
    { value: 'mini-valet', label: 'Mini Valet — €60–80' },
    { value: 'full-valet', label: 'Full Valet — €80–120' },
    { value: 'deluxe-detail', label: 'Deluxe Detail — €400–600' },
    { value: 'wedding', label: 'Wedding Pack — €150' },
    { value: 'wedding-addon', label: 'Wedding Pack Add-on — +€60' },
  ];

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
              <SectionLabel>Book</SectionLabel>
              <SectionTitle>Get on the List</SectionTitle>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
                Fill in the details below and I'll confirm your booking within 24 hours.
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
                  <FormSelect value={form.package} onChange={v => update('package', v)} options={packages} />
                </FormField>

                <FormField label="Service Type">
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {[
                      { value: 'drop-off', label: 'Drop-off to Ballybofey' },
                      { value: 'mobile', label: 'I come to you' },
                    ].map(opt => (
                      <button key={opt.value} type="button" onClick={() => update('service_type', opt.value)} style={{
                        flex: 1,
                        padding: '12px 16px',
                        background: form.service_type === opt.value ? 'var(--accent-glow)' : 'var(--bg-card)',
                        border: form.service_type === opt.value ? '1.5px solid var(--accent)' : '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        color: form.service_type === opt.value ? 'var(--accent)' : 'var(--text-secondary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem', fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        minHeight: '44px',
                      }}>{opt.label}</button>
                    ))}
                  </div>
                </FormField>

                <FormField label="Preferred Date (optional)">
                  <FormInput value={form.preferred_date} onChange={v => update('preferred_date', v)} type="date" />
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

                {/* Dealer toggle */}
                <div style={{
                  padding: '16px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                }}>
                  <label style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    cursor: 'pointer',
                  }}>
                    <div onClick={() => update('is_dealer', !form.is_dealer)} style={{
                      width: '44px', height: '24px',
                      background: form.is_dealer ? 'var(--accent)' : 'var(--bg-elevated)',
                      borderRadius: '12px',
                      position: 'relative',
                      transition: 'background 0.2s',
                      border: '1px solid var(--border)',
                      cursor: 'pointer', flexShrink: 0,
                    }}>
                      <div style={{
                        width: '18px', height: '18px',
                        background: 'var(--text-primary)',
                        borderRadius: '50%',
                        position: 'absolute', top: '2px',
                        left: form.is_dealer ? '22px' : '2px',
                        transition: 'left 0.2s',
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      I'm a dealer or garage enquiring about volume work
                    </span>
                  </label>

                  {form.is_dealer && (
                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <FormField label="Dealership / Garage Name" error={errors.dealer_name}>
                        <FormInput value={form.dealer_name} onChange={v => update('dealer_name', v)} placeholder="Business name" />
                      </FormField>
                      <FormField label="Approx. Volume per Week">
                        <FormInput value={form.volume} onChange={v => update('volume', v)} placeholder="e.g. 3-5 cars" />
                      </FormField>
                    </div>
                  )}
                </div>

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
                  {sending ? 'Sending…' : 'Submit Enquiry'}
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
                  { step: '2', text: "I reply within 24 hours" },
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

              <div style={{ ...getCardStyle(cardStyle), padding: '28px 24px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, marginBottom: '12px' }}>Quick Info</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span>Based in Ballybofey, Co. Donegal</span>
                  <span>Covering all of Donegal</span>
                  <span>Spaces fill up fast — book early</span>
                </div>
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
