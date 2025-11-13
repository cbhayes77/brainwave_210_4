import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";

export default function Footer() {
  return (
    <Section className="border-t border-white/10 text-center">
      <Container>
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} Chris Hayes. All rights reserved.
        </p>
      </Container>
    </Section>
  );
}
