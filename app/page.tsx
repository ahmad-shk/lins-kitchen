import { Navigation } from "@/components/navigation"
import { HeroBanner } from "@/components/hero-banner"
import { AboutUs } from "@/components/about-us"
import { SpecialOffers } from "@/components/special-offers"
import { FoodCategories } from "@/components/food-categories"
import { AmbianceGallery } from "@/components/ambiance-gallery"
import { VisitInfo } from "@/components/visit-info"
import { LogoSection } from "@/components/logo-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <AboutUs />
      <SpecialOffers />
      <FoodCategories />
      <AmbianceGallery />
      <VisitInfo />
    </div>
  )
}
