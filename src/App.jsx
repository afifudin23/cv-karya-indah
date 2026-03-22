import { useState } from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ClientsSection from './components/sections/ClientsSection'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import InventorySection from './components/sections/InventorySection'
import ProductionSection from './components/sections/ProductionSection'
import ProfileSection from './components/sections/ProfileSection'
import ReviewsSection from './components/sections/ReviewsSection'
import ServicesSection from './components/sections/ServicesSection'
import WorkspacesSection from './components/sections/WorkspacesSection'
import {
  clients,
  companyData,
  heroImage,
  inventories,
  navItems,
  portfolioGroups,
  reviews,
  services,
  workspaces,
} from './data/companyProfileData'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Header
        isOpen={isOpen}
        navItems={navItems}
        onToggle={() => setIsOpen((value) => !value)}
        onClose={() => setIsOpen(false)}
      />

      <main>
        <HeroSection companyData={companyData} heroImage={heroImage} />
        <ProfileSection companyData={companyData} />
        <ServicesSection services={services} />
        <ProductionSection portfolioGroups={portfolioGroups} />
        <WorkspacesSection workspaces={workspaces} />
        <InventorySection inventories={inventories} />
        <ClientsSection clients={clients} />
        <ReviewsSection reviews={reviews} />
        <ContactSection companyData={companyData} />
      </main>

      <Footer companyData={companyData} navItems={navItems} />
    </div>
  )
}
