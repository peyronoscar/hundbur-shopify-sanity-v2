import { Button, Heading, Text } from "@medusajs/ui";
import LocalizedClientLink from "@/storefront/components/common/components/localized-client-link";

const SignInPrompt = () => {
  return null;

  return (
    <div className="flex items-center justify-between bg-white">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Har du redan ett konto?
        </Heading>
        <Text className="mt-2 txt-medium text-ui-fg-subtle">
          Logga in för en snabbare och smidigare upplevelse.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10">
            Logga in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  );
};

export default SignInPrompt;
