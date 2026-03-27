import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ClientsSection from './components/sections/ClientsSection'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import InventorySection from './components/sections/InventorySection'
import OfficeWorkshopSection from './components/sections/OfficeWorkshopSection'
import ProductionSection from './components/sections/ProductionSection'
import ProfileSection from './components/sections/ProfileSection'
import ReviewsSection from './components/sections/ReviewsSection'
import ServicesSection from './components/sections/ServicesSection'
import {
  clients,
  companyData,
  heroImage,
  navItems,
  servicesData,
} from './data/companyProfileData'

const DEFAULT_ROUTE = '/beranda'
const VALID_ROUTES = new Set([
  '/beranda',
  '/profil',
  '/layanan',
  '/produksi',
  '/pelanggan',
  '/kontak',
])

function getCurrentPath() {
  const path = window.location.pathname || DEFAULT_ROUTE
  return VALID_ROUTES.has(path) ? path : DEFAULT_ROUTE
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    if (!VALID_ROUTES.has(window.location.pathname)) {
      window.history.replaceState({}, '', DEFAULT_ROUTE)
    }

    const handlePopState = () => {
      setCurrentPath(getCurrentPath())
      setIsOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)
    handlePopState()

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigate = (event, path) => {
    event.preventDefault()

    if (path !== currentPath) {
      window.history.pushState({}, '', path)
      setCurrentPath(path)
    }

    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPath) {
      case '/profil':
        return (
          <>
            <ProfileSection companyData={companyData} />
            <InventorySection id="inventaris-profile" />
            <OfficeWorkshopSection id="office-workshop-profile" />
          </>
        )
      case '/layanan':
        return <ServicesSection servicesData={servicesData} />
      case '/produksi':
        return <ProductionSection />
      case '/pelanggan':
        return (
          <>
            <ReviewsSection />
            <ClientsSection clients={clients} />
          </>
        )
      case '/kontak':
        return <ContactSection companyData={companyData} />
      case '/beranda':
      default:
        return (
          <>
            <HeroSection companyData={companyData} heroImage={heroImage} />
            <OfficeWorkshopSection id="office-workshop-home" />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Header
        isOpen={isOpen}
        navItems={navItems}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onToggle={() => setIsOpen((value) => !value)}
        onClose={() => setIsOpen(false)}
      />

      <main>
        {renderPage()}
      </main>

      <Footer
        companyData={companyData}
        navItems={navItems}
        onNavigate={handleNavigate}
      />
    </div>
  )
}
