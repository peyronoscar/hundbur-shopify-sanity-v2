import { Heading, Text } from "@medusajs/ui";

import InteractiveLink from "@/storefront/components/common/components/interactive-link";

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-start justify-center px-2 py-48">
      <Heading
        level="h1"
        className="flex flex-row items-baseline text-3xl-regular gap-x-2"
      >
        Varukorg
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Du har ingenting i din varukorg än. Kolla in våra produkter och hitta
        något du gillar!
      </Text>
      <div>
        <InteractiveLink href="/store">Utforska produkter</InteractiveLink>
      </div>
    </div>
  );
};

export default EmptyCartMessage;
