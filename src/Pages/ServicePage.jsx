// src/pages/ServicePage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { Code, Shield, TrendingUp, Globe, Smartphone, Database } from 'lucide-react'
import TechnologyITServices from '../Components/ServicesShowcase'
import CyberSecurintyConsultation from '../Components/CyberSecurityConsultation'
import BusinessManagementConsulting from '../Components/BusinessManagementConsulting'
import MarketingBrandingAdvertising from '../Components/MarketingBrandingAdvertising'
import SoftwareInnovationLabs from '../Components/SoftwareInnovationLabs'
const ServicePage = () => {
  const { serviceName } = useParams()

 const serviceComponents = {
    'technology-it-services': <TechnologyITServices />,
    'cyber-security-consultation': <CyberSecurintyConsultation />,
    'business-management-consulting': <BusinessManagementConsulting />,
     'marketing-branding-advertising': <MarketingBrandingAdvertising />,
    'software-innovation': <SoftwareInnovationLabs />
  }

   const ServiceComponent = serviceComponents[serviceName] || serviceComponents['technology-it-services']

  return (
  <div className="pt-20">
      {ServiceComponent}
    </div>
  )
}

export default ServicePage