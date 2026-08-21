const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const services = [
  "Corporate Events & Employee Engagements",
  "Brand Activation & Product Launches",
  "Exhibitions & Trade Shows",
  "Video Production",
  "Corporate & Retail Branding",
  "Outdoor Media",
  "Gifting",
  "Social Media & Digital Marketing",
];

const gallery = [
  {
    src: "assets/swotedge-gallery/image-07.jpeg",
    title: "Stage Design",
    alt: "SWOTEDGE stage lighting and event setup",
  },
  {
    src: "assets/swotedge-gallery/image-06.jpeg",
    title: "Corporate Experiences",
    alt: "SWOTEDGE corporate event stage and audience setup",
  },
  {
    src: "assets/swotedge-gallery/image-02.jpeg",
    title: "Leadership Forums",
    alt: "Speaker at a branded SWOTEDGE event podium",
  },
  {
    src: "assets/swotedge-gallery/image-04.jpeg",
    title: "Brand Moments",
    alt: "AMRUT event branding installation by SWOTEDGE",
  },
  {
    src: "assets/swotedge-gallery/image-01.jpeg",
    title: "Employee Engagements",
    alt: "Corporate team event managed by SWOTEDGE",
  },
  {
    src: "assets/swotedge-gallery/image-08.jpeg",
    title: "Live Production",
    alt: "Live event production with lighting and stage by SWOTEDGE",
  },
];

const locations = ["Bangalore", "Kerala", "Mumbai", "Delhi", "Hyderabad", "Kolkata"];

export default function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <img src={assetUrl("assets/swotedge-gallery/image-07.jpeg")} alt="" />
        </div>
        <div className="hero__shade" />
        <div className="hero__content">
          <p className="eyebrow">Integrated Martech & Experiential Solutions</p>
          <h1>SWOTEDGE</h1>
          <p className="tagline">ENGAGE | INSPIRE | TRANSFORM</p>
          <p className="hero__lede">
            SWOTEDGE Media is where strategy, creativity, technology, and execution come together
            to create memorable brand experiences across India.
          </p>
          <div className="hero__actions">
            <a className="button button--ghost" href="#gallery">
              View Event Moments
            </a>
          </div>
        </div>
        <div className="launch-strip">
          <span>A new experience is taking shape</span>
          <span>SWOTEDGE digital showcase unveiling soon</span>
        </div>
      </section>

      <section className="section intro-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience in Progress</p>
          <h2>Something unforgettable is taking the stage.</h2>
        </div>
        <div className="intro-copy">
          <p>
            SWOTEDGE is crafting a new digital home for brands that believe every launch, event,
            activation, and audience moment should feel alive. The full showcase is being built to
            reveal our work across events, experiential activations, retail branding, fabrication,
            and digital amplification.
          </p>
          <p>
            Until then, consider this your first look behind the curtain: a glimpse of the energy,
            detail, and execution excellence that helps ambitious ideas become memorable brand
            experiences across India.
          </p>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What We Craft</p>
          <h2>Experiences, launches, content, visibility, and everything around them.</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
              <p>Detailed showcase arriving soon. The complete experience portfolio is being curated.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Event Frames</p>
          <h2>A glimpse of the energy behind SWOTEDGE.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className={`gallery-item gallery-item--${index + 1}`} key={item.src}>
              <img src={assetUrl(item.src)} alt={item.alt} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section reach-section">
        <div className="section-heading">
          <p className="eyebrow">Across India</p>
          <h2>Built for brands that need ideas to travel well.</h2>
        </div>
        <div className="location-list">
          {locations.map((location) => (
            <span key={location}>{location}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-content">
          <p className="eyebrow">Connect With SWOTEDGE</p>
          <h2>Planning an event, launch, activation, or brand experience?</h2>
          <p>
            The full website is being curated. Until then, the team is available for project
            discussions, brand enquiries, and event planning conversations.
          </p>
          <div className="contact-actions">
            <a className="button button--ghost" href="mailto:info@swotedge.com">
              info@swotedge.com
            </a>
            <a
              className="button button--ghost"
              href="https://www.instagram.com/swotedgemedia/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
