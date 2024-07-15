import { Legal, LegalSection } from "@/storefront/components/legal";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontaktinformation",
};

export default function Page() {
  return (
    <Legal>
      <h1>Kontaktinformation</h1>
      <LegalSection>
        <p>
          Frågor om användarvillkoren ska skickas till oss på info@hundbur.nu.
        </p>
      </LegalSection>
    </Legal>
  );
}
