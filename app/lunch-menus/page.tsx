import FeatureItem from "@/components/feature-item"
import InnerBanner from "@/components/inner-banner"
import PageInfo from "@/components/page-info"
import ProductsListing from "@/components/products-listing"

export default function LunchMenu() {
  return (
    <div className="min-h-screen">
      <InnerBanner image="/images/lunch-menu-banner.png" title="UNSERE MITTAGSMENÜS" />
      <PageInfo 
        badge="Mittagsmenü" 
        title="Frisch zubereitet. Perfekt für Ihre Mittagspause."
        description="Sorgfältig zusammengestellte Mittagsgerichte, zubereitet mit erstklassigen Zutaten und raffinierten Aromen. Perfekt für eine entspannte und zugleich luxuriöse Auszeit am Mittag."
      />
      <FeatureItem/>
      <ProductsListing />
    </div>
  )
}
