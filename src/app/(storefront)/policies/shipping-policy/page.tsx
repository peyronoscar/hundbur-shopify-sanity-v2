import { Legal, LegalSection } from "@/storefront/components/legal";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraktpolicy",
};

export default function Page() {
  return (
    <Legal>
      <h1>Fraktpolicy</h1>
      <LegalSection>
        <p>
          Våra fraktavgifter i allmänhet bestäms av vart du vill att din
          beställning skickas. Alla priser hittar du i kassan.
        </p>
        <p>Fraktkostnaden läggs ovanpå produktpriset.</p>
        <p>
          Vi skickar alla våra leveranser med DHL. Leveransen tar vanligtvis 3-5
          arbetsdagar.
        </p>
        <p>
          Om din beställning lämnas på ett serviceställe under en längre tid och
          därför returneras till oss kommer du att stå för kostnaden för
          returen. Detta belopp kommer att dras av det belopp som returneras för
          din beställning.
        </p>
        <p>
          Alla returer betalas av kunden. Om du behöver hjälp med din retur
          kommer vi att kunna hjälpa dig mot en avgift som bestäms av
          returkostnaden från din plats. Du kan kontakta oss på info@hundbur.nu
          för mer information om returkostnader.
        </p>
      </LegalSection>
    </Legal>
  );
}
