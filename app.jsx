/* ── SMD Detailing · App Shell + Routing ──
 * Each page owns a real URL (pushState). vercel.json rewrites all
 * dotless paths to index.html, so deep links land here and the shell
 * resolves the page from location.pathname. */

const PAGE_META = {
  home: {
    path: '/',
    title: 'SMD Detailing — Craft Car Detailing, Ballybofey',
    desc: 'Owner-operator car detailing in Ballybofey, Co. Donegal. All-Ireland 1st place. Published prices from €60.',
  },
  services: {
    path: '/services',
    title: 'Services & Prices — SMD Detailing, Ballybofey',
    desc: 'Mini Valet from €60, Full Valet from €80, Deluxe Detail with Gtechniq ceramic coating. Published prices, no hidden extras. Drop off or I come to you.',
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
    desc: 'Book a Mini Valet, Full Valet or Deluxe Detail with Shay. Confirmed within 24 hours. Drop off to Ballybofey or mobile across Donegal.',
  },
  dealers: {
    path: '/dealers',
    title: 'Dealer Programme — SMD Detailing, Ballybofey',
    desc: 'Volume detailing for dealers and garages across Donegal. Weekly slots, consistent quality, fast turnaround.',
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
      case 'dealers': return <DealersPage {...props} />;
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
            {id:'gallery',label:'Gallery'},{id:'book',label:'Book'},{id:'dealers',label:'Dealers'},
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
      <BookingStrip />
      <Stats />
      <PricingCards navigate={navigate} cardStyle={cardStyle} />
      <Comparison cardStyle={cardStyle} />
      <WhatIDontDo cardStyle={cardStyle} />
      <WeddingPack navigate={navigate} cardStyle={cardStyle} />
      <DealerStrip navigate={navigate} />
      <CoverageArea />
      <PressStrip />
      <SocialProof />
      <FinalCTA navigate={navigate} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
