import { Text, clx } from "@medusajs/ui";

import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { getProductTypes } from "@/sanity/lib";

export default async function Footer() {
  const productTypes = await getProductTypes();

  return (
    <footer className="w-full mt-20 border-t border-ui-border-base bg-[#fafafa]">
      <div className="flex flex-col w-full content-container">
        <div className="flex flex-col items-start justify-between py-20 md:py-40 gap-y-10 xsmall:flex-row">
          <div>
            <Link
              href="/"
              className="uppercase txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base"
            >
              <Image
                src={logo}
                alt="Logo"
                className="w-auto h-12 md:h-20"
                height={200}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 text-small-regular md:gap-x-16 sm:grid-cols-3">
            {productTypes && productTypes?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Kategorier
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {productTypes.map((type, index) => {
                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={index}
                      >
                        <Link
                          className={clx("hover:text-ui-fg-base")}
                          href={`/store?type=${encodeURIComponent(type)}`}
                        >
                          {type}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Hundbur.nu</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <Link
                    className="hover:text-ui-fg-base"
                    href="/policies/contact-information"
                  >
                    Kontakta oss
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-ui-fg-base" href="/pages/faq">
                    Frågor & svar
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">
                Företagsinformation
              </span>
              <p className="text-ui-fg-subtle txt-small">
                Doggybag Sweden AB
                <br />
                Org. Nr. 559451-3359
              </p>
              <p className="text-ui-fg-subtle txt-small">
                c/o Devoote AB
                <br />
                Per Weijersgatan 2<br />
                211 34 Malmö
              </p>
              <p className="text-ui-fg-subtle txt-small">info@hundbur.nu</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full gap-5 mb-16 md:flex-row text-muted-foreground">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Doggybag Sweden AB. Alla rättigheter
            förbehållna.
          </Text>
          <div>
            <ul className="flex flex-wrap text-xs gap-x-3 gap-y-2">
              <li>
                <Link
                  className="hover:text-ui-fg-base"
                  href="/policies/refund-policy"
                >
                  Återbetalningspolicy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-ui-fg-base"
                  href="/policies/privacy-policy"
                >
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-ui-fg-base"
                  href="/policies/terms-of-service"
                >
                  Användarvillkor
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-ui-fg-base"
                  href="/policies/shipping-policy"
                >
                  Fraktpolicy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-ui-fg-base"
                  href="/policies/contact-information"
                >
                  Kontaktinformation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-ui-fg-base"
                  href="/policies/legal-notice"
                >
                  Rättsligt meddelande
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
