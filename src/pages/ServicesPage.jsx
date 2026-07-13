const serviceGroups = [
  {
    title: "Events & Experiences",
    items: [
      "Annual Days",
      "Conferences",
      "MICE Events",
      "Dealer Meets",
      "Product Launches",
      "Weddings",
    ],
  },
  {
    title: "Audience Engagement",
    items: [
      "Celebrity Events",
      "Concerts",
      "Exhibitions",
      "Sporting Events",
      "Employee Engagements",
      "Training Experiences",
    ],
  },
  {
    title: "Activations & Visibility",
    items: [
      "BTL Activations",
      "Sales Promotions",
      "Roadshows",
      "Rural Marketing",
      "Mall Activations",
      "Outlet Launches",
    ],
  },
  {
    title: "Branding & Digital",
    items: [
      "Wall Graphics",
      "Signages",
      "Office Brandings",
      "Retail POSM Deployment",
      "Digital Marketing",
      "Influencer Marketing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="section page-space">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h1 className="page-title">Everything needed to build a high-energy brand presence.</h1>
        <p className="page-intro">
          The offering is structured to handle concept, design, production, deployment, and
          amplification inside one coordinated system.
        </p>
      </div>

      <div className="service-groups">
        {serviceGroups.map((group) => (
          <article className="service-group" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
