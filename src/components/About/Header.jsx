import PageHeader from "../../components/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/about.jpg"
        title="ABOUT"
        subtitleLine1="Learn about our history and"
        subtitleLine2="commitment to quality service."
        showRating
        badges={[
          "Excellence in Quality",
          "Unmatched in Value",
        ]}
      />

      {/* About page content */}
    </>
  );
};

export default About;
