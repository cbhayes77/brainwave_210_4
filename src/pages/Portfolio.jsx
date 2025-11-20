import Projects from "../sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio Page for  Chris Hayes - Sr. UX Director, Product Designer, Front-end Engineer - Portfolio"
        description="This is where the description of the the portfolio page goes. Showcasing Chris Hayes' work as a Sr. UX Director, Product Designer, and Front-end Engineer."
        url="/"
      />
      <Projects
        title="Portfolio"
        description="Click any card to view details."
        headingLevel="h1"
        headingId="portfolio-heading"
        showViewMore={false}
      />
    </>
  );
}
