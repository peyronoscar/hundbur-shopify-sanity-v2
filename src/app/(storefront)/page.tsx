import { Metadata } from "next";
import Hero from "@/storefront/components/home/components/hero";
import FeaturedProductTypes from "@/storefront/components/home/components/featured-product-types";
import { Featured } from "@/storefront/components/home/components/featured";
import featuredImage1 from "@/public/images/home/featured-1.webp";
import featuredImage2 from "@/public/images/home/featured-2.png";
import featuredImage3 from "@/public/images/home/featured-3.png";
import featuredImage4 from "@/public/images/home/featured-4.png";
import InteractiveLink from "@/storefront/components/common/components/interactive-link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Hem",
  description:
    "Hundburar, Hundgaller & Hundgrindar till din hund och bil. Här handlar du krocktestade och godkända hundburar, hundgaller och hundgrindar samt tillbehör till din bil och hund.",
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Suspense>
        <FeaturedProductTypes />
      </Suspense>
      <div className="space-y-6 md:space-y-20 content-container">
        <Featured title="Välkommen!" image={featuredImage1} reverse={true}>
          <p className="font-medium">
            Säkra Hundburar, Hundgrindar & Hundgaller till Din Hund och Bil.
            Hundbur i bil.
          </p>
          <p>
            Här handlar du testade och godkända hundburar, hundgaller och
            hundgrindar samt tillbehör till din bil och hund. Hos oss hittar du
            alla de produkter du behöver för att du och din hund ska färdas både
            tryggt och bekvämt!
          </p>
        </Featured>
        <Featured
          title="Det blir enklare och tryggt för dig"
          image={featuredImage2}
        >
          <p>
            Vi har sorterat rätt bur, grind och galler till rätt bil. Våra burar
            och grindar är testade i de olika bilmodellerna. Detta för att du
            ska känna dig trygg med ditt köp.
          </p>
        </Featured>
        <Featured
          title="Transport av hund"
          image={featuredImage3}
          reverse={true}
        >
          <p>
            I Jordbruksverkets föreskrifter och allmänna råd om transport av
            levande djur, står det vilka regler som gäller vid transport av bl.a
            hund. De får till exempel endast transporteras i en personbils
            bagageutrymme om tillsyn kan ske från personutrymmet under den tid
            transporten pågår. Dessutom ska åtgärder vidtas för att säkra din
            hund vid inbromsning.
          </p>
          <p>Hur vet jag rätt storlek på hundburen till min hund?</p>
          <InteractiveLink href="/">
            Rätt storlek på buren till min hund
          </InteractiveLink>
        </Featured>
        <Featured title="Hundbur i bil och hund i bil" image={featuredImage4}>
          <p>
            När din hund åker bil ska utrymmet tillåta att hunden kan stå och
            ligga i en naturlig ställning. Föremål som kan skada din hund bör
            inte finnas i närheten. Hundar som åker bakom grindar i lastutrymmet
            ska inte dela plats med bagage i detta utrymme. Det finns alltid en
            risk att bagage faller över hunden och skadar den. Din hund åker
            oftast säkrast i en ordentligt förankrad bur placerad i bilens
            bagageutrymme.
          </p>
        </Featured>
      </div>
    </>
  );
}
