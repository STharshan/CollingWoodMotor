import PageHeader from "../../components/PageHeader";

const ServiceHero = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/service.jpg"
        title="SERVICES"
        subtitleLine1="Find out more about the wide range "
        subtitleLine2="of services we offer"
        showRating
        badges={[
          "Full Range",
          "Skilled Team",
        ]}
      />

      {/* About page content */}
    </>
  );
};

export default ServiceHero;

