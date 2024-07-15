import { Legal, LegalSection } from "@/storefront/components/legal";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rättsligt meddelande",
};

export default function Page() {
  return (
    <Legal>
      <h1>Rättsligt meddelande</h1>
      <LegalSection>
        <p>
          Företaget är baserat i Sverige, Europa. Vi tillhandahåller denna
          webbplats endast för användning av personer i Sverige. Vi gör inga
          anspråk på att webbplatsen eller något av dess innehåll är
          tillgängligt eller lämpligt utanför Sverige. Tillgång till webbplatsen
          kanske inte är laglig av vissa personer eller i vissa länder. Om du
          går in på webbplatsen utanför Sverige gör du det på eget initiativ och
          ansvarar för att lokala lagar följs.
        </p>
        <p>
          Dessa användarvillkor och eventuella separata avtal genom vilka vi
          tillhandahåller tjänster till dig ska styras av och tolkas i enlighet
          med gällande lagar i Sverige.
        </p>
      </LegalSection>
    </Legal>
  );
}
