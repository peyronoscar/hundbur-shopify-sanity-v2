import { Container, Text } from "@medusajs/ui";
import { useHits, useSearchBox } from "react-instantsearch";

import InteractiveLink from "@/storefront/components/common/components/interactive-link";

const ShowAll = () => {
  const { hits } = useHits();
  const { query } = useSearchBox();
  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  if (query === "") return null;
  if (hits.length > 0 && hits.length <= 6) return null;

  if (hits.length === 0) {
    return (
      <Container className="flex justify-center gap-2 py-2 h-fit">
        <Text>Inga resultat hittades.</Text>
      </Container>
    );
  }

  return (
    <Container className="flex items-center justify-center gap-2 py-4 sm:flex-col small:flex-row h-fit small:py-2">
      <Text>Visar det första {width > 640 ? 6 : 3} resultaten.</Text>
      <InteractiveLink href={`/results/${query}`}>Visa alla</InteractiveLink>
    </Container>
  );
};

export default ShowAll;
