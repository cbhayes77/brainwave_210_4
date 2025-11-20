import { fragments } from "../data/FragmentsData.jsx";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function About() {
  return (
    <>
      <SEO
        title="About Chris Hayes - Sr. UX Director, Product Designer, Front-end Engineer"
        description="Learn more about Chris Hayes, a Sr. UX Director, Product Designer, and Front-end Engineer with a passion for creating user-centered digital experiences."
        url="/about"
      />
      <Section>
        <Container>
          <h1 className="heading-page">About Me</h1>
          <p className="mt-2 body-default">Placeholder content.</p>
          <div>{fragments.content}</div>
        </Container>
      </Section>
    </>
  );
}
