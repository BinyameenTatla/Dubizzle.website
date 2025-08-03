import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navbar } from './Navbar.jsx'
import { Hero } from './Hero.jsx'
import { StatsSection } from './StatsSections.jsx'
import { BrandsSection } from './BrandsSection.jsx'
import { LifeAtDubizzle } from './LifeAtDubizzle.jsx'
import { Technologies } from './Technologies.jsx'
import { Footer } from './Footer.jsx'
import { TestimonialCarousel } from './TestimonialCarousel.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Hero />
  <StatsSection />
  <BrandsSection />
  <LifeAtDubizzle />
  <Technologies />
  <TestimonialCarousel />
  <Footer />
  </StrictMode>,
)
