const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const caseStudies = [
  {
    title: "Automotive Launch Circuit",
    outcome: "High-visibility product storytelling across multiple city touchpoints.",
    details:
      "Built as a modular format that could travel fast, adapt to local venues, and maintain premium launch energy at every stop.",
    image: "assets/brochure/page-28-img-02.jpg",
  },
  {
    title: "Enterprise Recognition Experience",
    outcome: "A polished annual celebration experience for employees, leadership, and key stakeholders.",
    details:
      "Blended stage design, content synchronization, environmental branding, and guest-flow planning into one clean event journey.",
    image: "assets/brochure/page-29-img-02.jpg",
  },
  {
    title: "Retail Activation Network",
    outcome: "A scalable activation system that improved visibility across consumer-facing environments.",
    details:
      "Designed for speed, repeated deployment, and strong visual consistency across city-level campaigns and local retail touchpoints.",
    image: "assets/brochure/page-48-img-02.jpg",
  },
];

const milestones = [
  "Immersive brand experiences across events, retail, and physical spaces",
  "Production infrastructure that supports rapid, multi-city rollouts",
  "Execution culture centered on ownership, agility, and consistency",
];

export default function WorkPage() {
  return (
    <section className="section page-space">
      <div className="section-heading">
        <p className="eyebrow">Work & Case Studies</p>
        <h1 className="page-title">Built for moments that need both drama and discipline.</h1>
        <p className="page-intro">
          The brochure points to case studies and milestone achievements. This page turns that
          direction into a client-facing showcase format you can keep expanding with photos and
          project specifics.
        </p>
      </div>

        <div className="case-study-grid">
          {caseStudies.map((study) => (
            <article className="case-study" key={study.title}>
              <img className="case-study__image" src={assetUrl(study.image)} alt={study.title} />
              <p className="card-label">Featured Build</p>
              <h2>{study.title}</h2>
              <p className="case-outcome">{study.outcome}</p>
              <p>{study.details}</p>
            </article>
        ))}
      </div>

      <div className="milestone-block">
        <p className="eyebrow">Milestone Strengths</p>
        <div className="milestone-list">
          {milestones.map((item) => (
            <article className="milestone-item" key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
