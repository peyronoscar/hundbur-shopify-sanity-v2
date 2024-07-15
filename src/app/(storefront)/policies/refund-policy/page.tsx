import { Legal, LegalSection } from "@/storefront/components/legal";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Återbetalningspolicy",
};

export default function Page() {
  return (
    <Legal>
      <h1>Återbetalningspolicy</h1>
      <LegalSection>
        <p className="font-semibold">
          Vid retur ska hundbur.nu underrättas så att retur sker till rätt
          adress. Vid retur ska alltid returfraktsedel från hundbur.nu användas,
          retursedel skickas per mail enligt överenskommelse. Vi godtar ej retur
          som skickas på annat sätt än det som är föreskrivet i villkoren.
        </p>
        <p>
          Vi skickar en retursedel fakturerar fraktkostnad från 199kr, samt
          149kr för administration. Returer (returfrakt över 20 kg, kostar fr
          300 kr upp till 550 kr per kolli) + 149kr administrations och
          hanteringsavgift, utom om varan är defekt eller om vi har packat fel.
          Returer ska skickas som brev eller paket, inte mot postförskott. Vid
          retur ska alltid vara returneras i orginalemballage. Varan får ej ha
          monterats om retur ska ske. Vi godtar ej retur av grind eller bur som
          har varit monterad. Bur eller grind som har varit monterad betraktar
          vi som begagnad och då kan vi ej godta att ta produkten i retur.
          Eventuellt kostnad för emaballag 199 kr/paket.
        </p>
        <p>
          När du utnyttjat din ångerrätt ska du, om det gäller en vara: sända
          den till oss.
        </p>
        <p>
          Återbetalningsskyldighet: Vi ska, om du utnyttjat din ångerrätt,
          betala tillbaka vad du har betalat för varan snarast exkl returfrakt +
          administrations och hanteringsavgift, och ev emballagakostnad, se ovan
          eller senast inom 30 dagar från den dag då vi tog emot varan. Du får
          själv betala returkostnaderna när du sänder tillbaka varan. Vi betalar
          alltid returkostnaden för att sända tillbaka så kallade
          ersättningsvaror eller felaktig leverans.
        </p>
      </LegalSection>
    </Legal>
  );
}
