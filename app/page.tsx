const presenters = [
  { number: "01", name: "Beresford Jarrett", role: "Chief Executive Officer", company: "Signrrett", theme: "Digital documents, approvals & vendor workflows", copy: "A simple, secure platform for preparing, sending, signing and tracking documents—while helping organizations coordinate contracts, approvals and vendor records.", color: "cyan" },
  { number: "02", name: "Mike Idemudia & team", role: "Director, Governance, Risk & Compliance", company: "Aegis360AI", theme: "AI-native governance, risk, compliance & cyber resilience", copy: "The Aegis360AI team will demonstrate how organizations can replace fragmented compliance processes with continuous control mapping, evidence, remediation and executive intelligence.", color: "lime" },
  { number: "03", name: "David Tamba Kpakima", role: "Chief Executive Officer", company: "Flot", theme: "Smarter digital payments & virtual cards", copy: "An early look at Flot's evolving payment experience, including virtual cards for subscriptions, online bills, food ordering and other digital payments.", color: "gold" },
];

const corporateBenefits = ["Showcase products and services", "Build visibility at home and in the diaspora", "Meet partners, customers and technology talent", "Join industry programs and conversations", "Qualify for future innovation showcases", "Support Sierra Leone's digital development"];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="SLinT home"><img src="/slint-logo.png" alt="SLinT logo" /><span><b>Sierra Leoneans</b><small>in Technology</small></span></a>
        <nav aria-label="Primary navigation"><a href="#program">Program</a><a href="#membership">Membership</a><a href="/members-ai-recap">Members</a><a className="nav-cta" href="https://www.slint.org" target="_blank" rel="noreferrer">Register free</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Sierra Leone's global technology community</p>
          <h1>Ideas deserve<br /><em>the spotlight.</em></h1>
          <p className="hero-lead">The first SLinT Monthly Innovation Showcase brings together the professionals, entrepreneurs, companies and innovators building Sierra Leone's digital future.</p>
          <div className="hero-actions"><a className="button primary" href="https://www.slint.org" target="_blank" rel="noreferrer">Register free <span>↗</span></a><a className="button secondary" href="#membership">Explore membership</a></div>
          <p className="access-note">Registration is free. Your private event link will be sent after registration.</p>
        </div>
        <div className="hero-visual">
          <div className="community-photo"><img src="/slint-community-hero.png" alt="Sierra Leonean technology professionals, students, entrepreneurs and corporate leaders collaborating" /><span>Professionals · Students · Founders · Companies</span></div>
          <aside className="event-card" aria-label="Event details">
            <div className="event-card-top"><span>Inaugural event</span><b>01</b></div><div className="date-block"><strong>29</strong><span>August<br />2026</span></div><div className="event-rule" />
            <dl><div><dt>Sierra Leone</dt><dd>4:00 PM</dd></div><div><dt>Nigeria · UK</dt><dd>5:00 PM</dd></div><div><dt>US Eastern</dt><dd>12:00 PM</dd></div></dl>
            <div className="event-badge">Live · Virtual · Free</div>
          </aside>
        </div>
      </section>

      <section className="intro-band">
        <p className="section-kicker">Who we are</p>
        <h2>The largest global organization connecting Sierra Leone's <span>ICT professionals, students, entrepreneurs, innovators and technology companies.</span></h2>
        <div className="intro-points"><p>SLinT connects Sierra Leone's technology community at home and throughout the diaspora—creating pathways to professional development, mentorship, visibility, partnerships and collective impact.</p><div className="audience-tags"><span>Professionals</span><span>Students</span><span>Founders</span><span>Companies</span><span>Diaspora</span></div></div>
      </section>

      <section className="program section" id="program">
        <div className="section-heading"><div><p className="section-kicker">Three companies · One national perspective</p><h2>Meet the innovators</h2></div><p>Four focused, 15-minute presentations designed to introduce useful technology, spark practical feedback and create new connections.</p></div>
        <div className="presenter-grid">
          {presenters.map((presenter) => <article className={`presenter-card ${presenter.color}`} key={presenter.number}><div className="presenter-number">{presenter.number}</div><p className="presenter-company">{presenter.company}</p><h3>{presenter.name}</h3><p className="presenter-role">{presenter.role}</p><div className="card-divider" /><h4>{presenter.theme}</h4><p>{presenter.copy}</p></article>)}
        </div>
        <article className="keynote-card"><div className="keynote-mark">NC<sup>3</sup></div><div className="keynote-copy"><p className="section-kicker">Special national address</p><h3>Mrs. Mariama S. Yormah</h3><p className="keynote-role">National Cybersecurity Coordinator of Sierra Leone · Head, National Cybersecurity Coordination Centre</p><h4>The state of cybersecurity and careers in Sierra Leone</h4><p>A national perspective on the threats accompanying digital transformation—and the growing professional opportunities available to students, technology practitioners and career changers.</p></div><div className="keynote-time"><span>Slot</span><strong>04</strong><small>15 minutes</small></div></article>
      </section>

      <section className="membership" id="membership">
        <div className="membership-copy"><p className="section-kicker">Corporate membership</p><h2>Put your company at the centre of Sierra Leone's technology ecosystem.</h2><p>For technology companies, banks, telecommunications providers, fintechs, startups, professional firms, training organizations, institutions and other digitally enabled organizations.</p><div className="membership-actions"><a className="button dark" href="https://www.slint.org" target="_blank" rel="noreferrer">Become a corporate member <span>↗</span></a><a className="text-link" href="https://www.slint.org" target="_blank" rel="noreferrer">View all membership options →</a></div></div>
        <div className="benefit-grid">{corporateBenefits.map((benefit, index) => <div className="benefit" key={benefit}><span>{String(index + 1).padStart(2, "0")}</span><p>{benefit}</p></div>)}</div>
      </section>

      <section className="member-history section"><div className="history-card"><div className="history-lock" aria-hidden="true">⌾</div><div><p className="section-kicker">Inside the member portal</p><h2>Continue learning beyond the showcase.</h2><p>SLinT's previous members-only artificial-intelligence program featured Tamba Lamin and Cecil John. Registered members can sign in to access the workshop recap and related learning content.</p></div><a className="button secondary-light" href="/members-ai-recap">Members-only recap →</a></div></section>

      <section className="register-section"><p className="section-kicker">Saturday · August 29 · 4:00 PM</p><h2>Register free.<br /><span>Bring your ambition.</span></h2><p>Complete your registration at SLinT.org. Your private virtual-event link will be sent directly after registration.</p><a className="button primary large" href="https://www.slint.org" target="_blank" rel="noreferrer">Register at www.slint.org <span>↗</span></a></section>

      <footer><div className="brand footer-brand"><img src="/slint-logo.png" alt="" /><span><b>SLinT</b><small>Connect · Showcase · Innovate</small></span></div><p>Sierra Leoneans in Technology</p><a href="https://www.slint.org">www.slint.org</a></footer>
    </main>
  );
}
