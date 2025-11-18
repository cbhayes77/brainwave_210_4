import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return (
    <>
    <SEO 
      title="Chris Hayes Resume"
      description="View my professional resume and experience as a Sr. UX Director, Product Designer, and Front-end Engineer"
      url="/resume"
    />
    <Section>
      <Container>
        <h1 className="heading-page">My Resume</h1>
        <p className="mt-2 body-default">Placeholder content.</p>
        <iframe
          src="/chris_hayes_resume.pdf"
          width="100%"
          height="800px"
          title="Chris Hayes Resume"
          className="mt-4 border-gray-300 rounded-lg shadow-lg"
        >
          <p>Your browser does not support iframes. <a href="/chris_hayes_resume.pdf">Click here to view the PDF directly.</a></p>
        </iframe>
      </Container>
    </Section>
    </>
  );
}
