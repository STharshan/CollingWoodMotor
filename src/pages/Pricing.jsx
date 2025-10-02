import React from 'react'
import FAQSection from '../components/Pricing/FAQSection'
import PricingHeader from '../components/Pricing/PricingHeader'
import FinanceBanner from '../components/Pricing/FinanceBanner'
import PricingTable from '../components/Pricing/PricingTable'
import ServiceTable from '../components/Pricing/ServicingPricing'

const Pricing = () => {
  return (
    <div>
      <PricingHeader />
      <PricingTable />
      <ServiceTable />
      <FinanceBanner />
      <FAQSection />
    </div>
  )
}

export default Pricing
