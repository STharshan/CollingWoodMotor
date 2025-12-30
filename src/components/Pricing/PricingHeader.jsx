import PageHeader from "../../components/PageHeader";

const PricingHeader = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/HERO.jpg"
        title="PRICING"
        subtitleLine1="Dealer level service at a fraction of"
        subtitleLine2="the cost"
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

export default PricingHeader;
