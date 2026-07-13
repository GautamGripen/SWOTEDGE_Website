const contactCards = [
  {
    title: "WhatsApp First",
    text: "Perfect for quick project discussions, lead capture, and client convenience on mobile.",
  },
  {
    title: "Installable Web App",
    text: "The site supports a PWA-style install flow so it feels closer to an app on Android and iPhone.",
  },
  {
    title: "Launch Ready",
    text: "Swap in the final WhatsApp number, client email, and portfolio visuals, then deploy to hosting.",
  },
];

export default function ContactPage({ whatsappUrl }) {
  return (
    <section className="section page-space">
      <div className="section-heading">
        <p className="eyebrow">Contact & Conversion</p>
        <h1 className="page-title">Ready to turn interest into enquiries?</h1>
        <p className="page-intro">
          This version is structured to convert well on desktop and mobile, with a direct WhatsApp
          path for faster client response.
        </p>
      </div>

      <div className="contact-layout">
        <article className="contact-panel">
          <h2>Primary Call to Action</h2>
          <p>
            Connect SWOTEDGE to the client’s official business number before launch. The chat link
            is already wired into the site.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Open WhatsApp Chat
            </a>
          </div>
          <p className="small-note">
            Update the number in <code>src/App.jsx</code> to make this live.
          </p>
        </article>

        <div className="contact-card-grid">
          {contactCards.map((card) => (
            <article className="contact-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
