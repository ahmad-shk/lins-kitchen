import Image from "next/image"

const ProductsListing = () => {
  return (
    <div className="py-16">
      <div className="container-sm space-y-16">
        <div className="space-y-9">
          <div className="flex flex-wrap max-md:flex-col gap-5 lg:gap-10 items-start">
            <div className="flex-1 w-full">
              <h3 className="font-playfair text-2xl md:text-3xl lg:text-5xl tracking-tighter mb-6" >REIS, NUDELN & HÜHNCHEN</h3>
              <ul className="text-black text-base lg:text-lg space-y-1.5">
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M1</span>
                  <span className="flex-1 font-normal">Eierreis mit Hühnchen A,F,C</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M2</span>
                  <span className="flex-1 font-normal">Nudeln mit Hühnchen A,F,C</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M3</span>
                  <span className="flex-1 font-normal">Knuspriges Hühnchen auf Nudeln A,F</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M4</span>
                  <span className="flex-1 font-normal">Knuspriges Hühnchen süß-sauer A,M</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M5</span>
                  <span className="flex-1 font-normal">Rotes Thai-Curry-Hühnchen*</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M6</span>
                  <span className="flex-1 font-normal">Rotes Thai-Curry-Hühnchen*</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M7</span>
                  <span className="flex-1 font-normal">Rotes Thai-Curry-Hühnchen*</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M8</span>
                  <span className="flex-1 font-normal">Rotes Thai-Curry-Hühnchen*</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M9</span>
                  <span className="flex-1 font-normal">Rotes Thai-Curry-Hühnchen*</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M18</span>
                  <span className="flex-1 font-normal">Knuspriges Hühnchen in Sesam A,N</span>
                  <span className="font-medium">€ 11,50</span>
                </li>
              </ul>
            </div>
            <div className="image relative max-w-[380px] overflow-hidden rounded-xl mx-auto">
              <Image src="/images/image-8.jpg" width={380} height={540} alt="product"/>
            </div>
          </div>
          <div className="bg-navyBlue rounded-2xl p-4 sm:p-5 gap-3 sm:gap-5 text-white flex items-center justify-between">
            <span className="bg-btnSecondary rounded-md inline-block text-navyBlue text-lg sm:text-2xl tracking-tighter py-1.5 sm:py-2.5 px-1.5" >M26</span>
            <h4 className="text-lg sm:text-2xl uppercase flex-1 max-sm:leading-snug">4 Laughing Sushi + 6 Ebi<br className="max-sm:hidden"/> Tempura Roll</h4>
            <span className="text-btnSecondary text-2xl lg:text-[30px] tracking-tighter">€ 13,90</span>
          </div>
        </div>
        <div className="space-y-9">
          <div className="flex flex-wrap max-md:flex-col flex-row-reverse gap-5 md:gap-10 items-start">
            <div className="flex-1 w-full">
              <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-6 uppercase" >Knusprige Ente</h3>
              <ul className="text-black text-base lg:text-lg space-y-1.5">
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M15</span>
                  <span className="flex-1 font-normal">Ente auf Eierreis A,F,C</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M16</span>
                  <span className="flex-1 font-normal">Ente mit Wokgemüse A,F,G</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M17</span>
                  <span className="flex-1 font-normal">Ente süß-sauer A,M</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M18</span>
                  <span className="flex-1 font-normal">Ente auf Acht-Schätze-Sauce *</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M19</span>
                  <span className="flex-1 font-normal">Ente mit Knoblauchsauce A,F</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
              </ul>
            </div>
            <div className="image relative max-w-[380px] overflow-hidden rounded-xl mx-auto">
              <Image src="/images/image-14.jpg" width={380} height={540} alt="product"/>
            </div>
          </div>
          <div className="bg-navyBlue rounded-2xl p-4 sm:p-5 gap-3 sm:gap-5 text-white flex items-center justify-between">
            <span className="bg-btnSecondary rounded-md inline-block text-navyBlue text-lg sm:text-2xl tracking-tighter py-1.5 sm:py-2.5 px-1.5" >M28</span>
            <h4 className="text-lg sm:text-2xl uppercase flex-1 max-sm:leading-snug">4 Lachs-Sushi + 6<br className="max-sm:hidden"/> Califormaki</h4>
            <span className="text-btnSecondary text-2xl md:text-[30px] tracking-tighter">€ 13,90</span>
          </div>
        </div>
        <div className="space-y-9">
          <div className="flex flex-wrap max-md:flex-col gap-5 md:gap-10 items-start">
            <div className="flex-1 w-full">
              <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-6" >RINDFLEISCH</h3>
              <ul className="text-black text-base lg:text-lg space-y-1.5">
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M15</span>
                  <span className="flex-1 font-normal">Rindfleisch Bulgogi  A,F</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M16</span>
                  <span className="flex-1 font-normal">Rindfleisch Gambian  A,F,L</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M17</span>
                  <span className="flex-1 font-normal">Rindfleisch mit schwarzem Pfeffer  A,F</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M18</span>
                  <span className="flex-1 font-normal">Rindfleisch mit Wok-Gemüse  A,F</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M19</span>
                  <span className="flex-1 font-normal">Rindfleisch mit Zwiebeln  A,F</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
              </ul>
            </div>
            <div className="image relative max-w-[380px] overflow-hidden rounded-xl mx-auto">
              <Image src="/images/image-15.jpg" width={380} height={540} alt="product"/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-navyBlue rounded-2xl p-4 sm:p-5 gap-3 sm:gap-5 text-white flex items-center justify-between">
              <span className="bg-btnSecondary rounded-md inline-block text-navyBlue text-lg sm:text-2xl tracking-tighter py-1.5 sm:py-2.5 px-1.5" >M23</span>
              <h4 className="text-lg sm:text-2xl uppercase flex-1 max-sm:leading-snug">Acht<br className="max-sm:hidden"/> Schätze</h4>
              <span className="text-btnSecondary text-2xl lg:text-[30px] tracking-tighter">€ 13,90</span>
            </div>
            <div className="bg-navyBlue rounded-2xl p-4 sm:p-5 gap-3 sm:gap-5 text-white flex items-center justify-between">
              <span className="bg-btnSecondary rounded-md inline-block text-navyBlue text-lg sm:text-2xl tracking-tighter py-1.5 sm:py-2.5 px-1.5" >M29</span>
              <h4 className="text-lg sm:text-2xl uppercase flex-1 max-sm:leading-snug">General Zhus<br className="max-sm:hidden"/> Huhn</h4>
              <span className="text-btnSecondary text-2xl md:text-[30px] tracking-tighter">€ 13,90</span>
            </div>
          </div>
        </div>

        <div className="space-y-9">
          <div className="flex flex-wrap max-md:flex-col flex-row-reverse gap-5 md:gap-10 items-start">
            <div className="flex-1 w-full">
              <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-6" >VEGETARISCH, FISCH & SUSHI</h3>
              <ul className="text-black text-base lg:text-lg space-y-1.5">
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M15</span>
                  <span className="flex-1 font-normal">Gebackener Seelachs süß-sauer  A,M,D</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M16</span>
                  <span className="flex-1 font-normal">Gebackener Seelachs mit Wokgemüse A,F,D</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M17</span>
                  <span className="flex-1 font-normal">Tofu nach Szechuan-Art  A,G</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M18</span>
                  <span className="flex-1 font-normal">Gebratenes Wokgemüse</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M19</span>
                  <span className="flex-1 font-normal">Garnelen mit Wokgemüse A,F,B</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span className="font-normal inline-block min-w-9">M20</span>
                  <span className="flex-1 font-normal">Lachs Teriyaki mit Gemüse N,F,D</span>
                  <span className="font-medium">€ 9,50</span>
                </li>
              </ul>
            </div>
            <div className="image relative max-w-[380px] overflow-hidden rounded-xl mx-auto">
              <Image src="/images/image-18.jpg" width={380} height={540} alt="product"/>
            </div>
          </div>
          <div className="bg-navyBlue rounded-2xl p-4 sm:p-5 gap-3 sm:gap-5 text-white flex items-center justify-between">
            <span className="bg-btnSecondary rounded-md inline-block text-navyBlue text-lg sm:text-2xl tracking-tighter py-1.5 sm:py-2.5 px-1.5" >M23</span>
            <h4 className="text-lg sm:text-2xl uppercase flex-1 max-sm:leading-snug">6 Lachs-Sushi + 6 Lachs-<br className="max-sm:hidden"/> Lemuren</h4>
            <span className="text-btnSecondary text-2xl md:text-[30px] tracking-tighter">€ 13,90</span>
          </div>
        </div>

        <div className="text-center space-y-5">
          <h4 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-navyBlue font-semibold">ALLERGENINFORMATIONEN</h4>
          <p className="text-black text-base md:text-xl leading-snug">A – Glutenhaltiges Getreide, B – Krebstiere, C – Ei, D – Fisch, E – Erdnüsse, F – Soja, G – Milch und Laktose, H – Nüsse, L – Sellerie, M – Senf, N – Sesam, O – Sulfite, P – Lupine, R – Weichtiere, – Scharfe</p>
          <i className="text-black text-sm md:text-base leading-tight">If you have any further questions about ingredients and ingredients, <br className="max-sm:hidden"/> our staff will be happy to help you!</i>
        </div>
      </div>
    </div>
  )
}

export default ProductsListing