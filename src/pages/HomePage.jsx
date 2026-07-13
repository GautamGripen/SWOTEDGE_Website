import { Link } from "react-router-dom";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const stats = [
  { value: "100+", label: "Agile projects delivered across India" },
  { value: "50+", label: "Execution and production specialists" },
  { value: "Pan-India", label: "Network built for speed and consistency" },
  { value: "360°", label: "Strategy, fabrication, branding, and amplification" },
];

const capabilities = [
  {
    title: "Experiential Events",
    text: "Annual days, conferences, MICE, dealer meets, product launches, weddings, and recognition programs.",
  },
  {
    title: "Live Audience Moments",
    text: "Celebrity events, concerts, exhibitions, sporting events, employee engagements, team outings, and trainings.",
  },
  {
    title: "Activation Systems",
    text: "BTL activations, sales promotions, roadshows, RWA activations, rural marketing, mall activations, and outlet launches.",
  },
  {
    title: "Brand Environments",
    text: "Wall graphics, signages, office branding, retail POSM deployment, digital marketing, and influencer marketing.",
  },
];

const portfolioImages = [
  {
    src: "/assets/brochure/page-29-img-02.jpg",
    alt: "Corporate conference stage and lighting execution by SWOTEDGE",
    title: "Conference Production",
  },
  {
    src: "/assets/brochure/page-34-img-02.jpg",
    alt: "Exhibition stall and trade-show setup by SWOTEDGE",
    title: "Exhibition Environments",
  },
  {
    src: "/assets/brochure/page-49-img-02.jpg",
    alt: "Office branding and wall graphics installations by SWOTEDGE",
    title: "Branded Spaces",
  },
  {
    src: "/assets/brochure/page-39-img-02.jpg",
    alt: "Custom gifting and curated brand hamper experience by SWOTEDGE",
    title: "Gifting Experiences",
  },
];

export default function HomePage({ whatsappUrl }) {
  return (
    <>
      <section className="hero section">
        <div className="hero__copy">
          <p className="eyebrow">Martech • Events • Execution</p>
          <h1>We build event experiences people feel before they even walk in.</h1>
          <p className="hero__lede">
            SWOTEDGE Media India Private Limited delivers integrated experiential marketing,
            production, fabrication, retail branding, environmental graphics, and digital
            amplification across physical and digital ecosystems.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Start on WhatsApp
            </a>
            <Link className="button button--ghost" to="/work">
              View Case Studies
            </Link>
          </div>

          <div className="hero__ticker">
            <span>Product Launches</span>
            <span>Corporate Conferences</span>
            <span>Luxury Weddings</span>
            <span>Retail Activations</span>
            <span>Exhibitions</span>
          </div>
        </div>

        <div className="hero__cards">
          <article className="glass-card glass-card--feature">
            <img
              className="feature-visual"
              src={assetUrl("assets/brochure/page-30-img-02.jpg")}
              alt="Large-format event setup and experiential stage design by SWOTEDGE"
            />
            <div className="feature-copy">
              <p className="card-label">Creating Experiences Beyond Screens & Spaces</p>
              <h2>Immersive event design backed by scalable execution strength.</h2>
              <div className="card-metrics">
                <span>Experience Design</span>
                <span>Fabrication</span>
                <span>Branding</span>
                <span>Digital Boost</span>
              </div>
            </div>
          </article>

          <div className="hero-mosaic">
            <article className="glass-card glass-card--quote">
              <p>
                SWOTEDGE combines strategy, creativity, production, and technology to create
                meaningful engagement, stronger visibility, and lasting consumer impact.
              </p>
            </article>
            <img
              className="mosaic-image"
              src={assetUrl("assets/brochure/page-52-img-02.jpg")}
              alt="Modern branded office environment delivered by SWOTEDGE"
            />
            <img
              className="mosaic-image"
              src={assetUrl("assets/brochure/page-40-img-02.jpg")}
              alt="Premium client gifting kit produced by SWOTEDGE"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Impact Numbers</p>
          <h2>Proof that scale and polish can live together.</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="metric-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Who We Are</p>
          <h2>Built to make brands experienced, not just displayed.</h2>
        </div>
        <div className="two-column">
          <article className="panel">
            <p>
              SWOTEDGE is a full-service martech company delivering strategic, creative, and
              execution-led brand marketing across events, experiential activations, retail
              branding, fabrication, environmental graphics, and digital amplification.
            </p>
          </article>
          <article className="panel panel--warm">
            <p className="pull-quote">
              Ownership, agility, and a solution-first culture shape every execution from concept
              to on-ground delivery.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Core Capability System</p>
          <h2>The service stack behind the spectacle.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected Visuals</p>
          <h2>Real frames from the SWOTEDGE portfolio.</h2>
          <p className="page-intro">
            These visuals are taken from the client brochure and now woven directly into the
            website to give the brand a more authentic, client-ready presence.
          </p>
        </div>
        <div className="portfolio-gallery">
          {portfolioImages.map((image) => (
            <article className="portfolio-card" key={image.src}>
              <img src={assetUrl(image.src.replace(/^\//, ""))} alt={image.alt} />
              <div className="portfolio-card__overlay">
                <p>{image.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--cta">
        <div className="cta-block">
          <div>
            <p className="eyebrow">Why SWOTEDGE</p>
            <h2>Nationwide reach, integrated teams, dependable outcomes.</h2>
            <p>
              Pan-India operations, strong vendor ecosystems, and reliable field execution let
              SWOTEDGE move quickly without losing the finish.
            </p>
          </div>
          <div className="hero__actions">
            <Link className="button button--ghost" to="/services">
              Explore All Services
            </Link>
            <Link className="button button--primary" to="/contact">
              Plan a Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
