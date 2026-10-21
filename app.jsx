/* ── SMD Detailing · App Shell + Routing ──
 * Each page owns a real URL (pushState). vercel.json rewrites all
 * dotless paths to index.html, so deep links land here and the shell
 * resolves the page from location.pathname. */

const PAGE_META = {
  home: {
    path: '/',
    title: 'SMD Detailing — Craft Car Detailing, Ballybofey',
    desc: 'Owner-operator car detailing in Ballybofey, Co. Donegal. All-Ireland 1st place. Published prices from €70.',
  },
  services: {
    path: '/services',
    title: 'Services & Prices — SMD Detailing, Ballybofey',
    desc: 'Mini Valet from €70, Full Valet from €100, Premium Valet from €180, Deluxe Detail with ceramic coating. Published prices, no hidden extras. Drop-off to Ballybofey.',
  },
  about: {
    path: '/about',
    title: 'About Shay — SMD Detailing, Ballybofey',
    desc: 'Shay McDevitt, All-Ireland-winning detailer in Ballybofey, Co. Donegal. Every car done personally — no juniors, no shortcuts.',
  },
  gallery: {
    path: '/gallery',
    title: 'Gallery — SMD Detailing, Ballybofey',
    desc: 'Real cars, real results. Full valets, classic Minis, ceramic coatings and deep cleans across Donegal — all Shay’s own work.',
  },
  book: {
    path: '/book',
    title: 'Book a Detail — SMD Detailing, Ballybofey',
    desc: 'Book a Mini, Full, Premium or Deluxe detail with Shay. Confirmed within 24 hours. Drop-off to Ballybofey, Co. Donegal.',
  },
  commercial: {
    path: '/commercial',
    title: 'Commercial Programme — SMD Detailing, Ballybofey',
    desc: 'Regular and volume detailing for dealers, garages, fleets and businesses across Donegal. Weekly slots, consistent quality, fast turnaround.',
  },
  'commercial-enquiry': {
    path: '/commercial-enquiry',
    title: 'Commercial Enquiry — SMD Detailing, Ballybofey',
    desc: 'Enquire about regular or volume detailing for your dealership, garage, fleet or business. Based in Ballybofey, Co. Donegal.',
  },
  cms: {
    path: '/cms',
    title: 'SMD Detailing — Area Page Template',
    desc: 'Internal template.',
  },
};

function pageFromPath(pathname) {
  const slug = String(pathname || '/').replace(/^\/+|\/+$/g, '');
  if (!slug) return 'home';
  if (slug === 'dealers') return 'commercial'; // legacy URL
  return PAGE_META[slug] ? slug : 'home';
}

function applyMeta(page) {
  const meta = PAGE_META[page] || PAGE_META.home;
  document.title = meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', meta.desc);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', 'https://smddetailing.com' + (meta.path === '/' ? '/' : meta.path));
}

function App() {
  const [page, setPage] = React.useState(() => pageFromPath(window.location.pathname));
  const [transitioning, setTransitioning] = React.useState(false);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const theme = THEMES[tweaks.theme] || THEMES.electric;
    const fonts = FONT_PAIRINGS[tweaks.fontPairing] || FONT_PAIRINGS.spaceGrotesk;
    const vars = { ...theme, ...fonts };
    Object.entries(vars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }, [tweaks.theme, tweaks.fontPairing]);

  const showPage = React.useCallback((p) => {
    setTransitioning(true);
    setTimeout(() => {
      setPage(p);
      applyMeta(p);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => setTransitioning(false), 50);
    }, 250);
  }, []);

  const navigate = React.useCallback((p) => {
    if (p === page) return;
    const meta = PAGE_META[p] || PAGE_META.home;
    window.history.pushState({ page: p }, '', meta.path);
    showPage(p);
  }, [page, showPage]);

  React.useEffect(() => {
    applyMeta(page);
    const onPop = () => showPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [showPage]);

  const renderPage = () => {
    const props = { navigate, cardStyle: tweaks.cardStyle };
    switch (page) {
      case 'home': return <HomePage {...props} />;
      case 'services': return <ServicesPage {...props} />;
      case 'about': return <AboutPage {...props} />;
      case 'gallery': return <GalleryPage {...props} />;
      case 'book': return <BookPage {...props} />;
      case 'commercial': return <CommercialPage {...props} />;
      case 'commercial-enquiry': return <CommercialEnquiryPage {...props} />;
      case 'cms': return <CMSPage {...props} />;
      default: return <HomePage {...props} />;
    }
  };

  return (
    <>
      <Nav currentPage={page} navigate={navigate} />
      <main style={{
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? 'translateY(8px)' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        minHeight: '100vh',
      }}>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <TweaksPanel title="SMD Detailing">
        <TweakSection label="Theme">
          <TweakRadio label="Colour" value={tweaks.theme}
            options={[{label:'Electric Blue',value:'electric'},{label:'Gold',value:'gold'},{label:'Oxblood',value:'oxblood'},{label:'Midnight',value:'midnight'}]}
            onChange={v => setTweak('theme', v)} />
        </TweakSection>
        <TweakSection label="Typography">
          <TweakRadio label="Font Pairing" value={tweaks.fontPairing}
            options={[{label:'Space Grotesk',value:'spaceGrotesk'},{label:'Outfit',value:'outfit'}]}
            onChange={v => setTweak('fontPairing', v)} />
        </TweakSection>
        <TweakSection label="Cards">
          <TweakRadio label="Card Style" value={tweaks.cardStyle}
            options={[{label:'Bordered',value:'bordered'},{label:'Filled',value:'filled'},{label:'Glass',value:'glass'}]}
            onChange={v => setTweak('cardStyle', v)} />
        </TweakSection>
        <TweakSection label="Pages">
          {[{id:'home',label:'Home'},{id:'services',label:'Services'},{id:'about',label:'About'},
            {id:'gallery',label:'Gallery'},{id:'book',label:'Book'},{id:'commercial',label:'Commercial'},
            {id:'cms',label:'SEO Template'}].map(p => (
            <TweakButton key={p.id} label={p.label} onClick={() => navigate(p.id)} />
          ))}
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

function HomePage({ navigate, cardStyle }) {
  return (
    <>
      <Hero navigate={navigate} />
      <Stats />
      <PricingCards navigate={navigate} cardStyle={cardStyle} />
      <GoogleReviews cardStyle={cardStyle} />
      <Comparison cardStyle={cardStyle} />
      <WinterShield navigate={navigate} cardStyle={cardStyle} />
      <WhatIDontDo cardStyle={cardStyle} />
      <WeddingPack navigate={navigate} cardStyle={cardStyle} />
      <CommercialStrip navigate={navigate} />
      <CoverageArea />
      <PressStrip />
      <SocialProof />
      <FinalCTA navigate={navigate} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
