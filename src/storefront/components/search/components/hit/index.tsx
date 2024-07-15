import { Container, Text } from "@medusajs/ui";

import Thumbnail from "@/storefront/components/products/components/thumbnail";
import LocalizedClientLink from "@/storefront/components/common/components/localized-client-link";

export type ProductHit = {
  id: string;
  title: string;
  handle: string;
  product_image: string | null;
};

type HitProps = {
  hit: ProductHit;
};

const Hit = ({ hit }: HitProps) => {
  console.log({ hit });
  return (
    <LocalizedClientLink href={`/products/${hit.handle}`}>
      <Container
        key={hit.id}
        className="flex sm:flex-col gap-2 w-full p-4 shadow-elevation-card-rest hover:shadow-elevation-card-hover items-center sm:justify-center"
      >
        <Thumbnail
          thumbnail={hit.product_image}
          size="square"
          className="group h-12 w-12 sm:h-full sm:w-full"
        />
        <div className="flex flex-col justify-between group">
          <div className="flex flex-col">
            <Text className="text-ui-fg-subtle">{hit.title}</Text>
          </div>
        </div>
      </Container>
    </LocalizedClientLink>
  );
};

export default Hit;
