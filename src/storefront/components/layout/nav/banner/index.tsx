import { Marquee } from "@/storefront/components/ui/marquee";
import { ApplePay } from "@/storefront/svgs/apple-pay";
import { GooglePay } from "@/storefront/svgs/google-pay";
import { Klarna } from "@/storefront/svgs/klarna";
import { Maestro } from "@/storefront/svgs/maestro";
import { Mastercard } from "@/storefront/svgs/mastercard";
import { ShopifyPay } from "@/storefront/svgs/shopify-pay";
import { Visa } from "@/storefront/svgs/visa";

export function NavBanner() {
  return (
    <div className="py-1 bg-muted">
      <Marquee className="select-none" speed={0.4} direction="left">
        <div className="flex items-center gap-16 pl-16 md:gap-20 md:pl-20 text-sm md:text-xs font-medium">
          <div>
            Säkra betalning <span className="mx-2">&#x2022;</span> Snabba
            leveranser
          </div>
          <div className="flex gap-2">
            <Mastercard className="w-8" />
            <Klarna className="w-8" />
            <ApplePay className="w-8" />
            <Maestro className="w-8" />
            <GooglePay className="w-8" />
            <ShopifyPay className="w-8" />
            <Visa className="w-8" />
          </div>
        </div>
      </Marquee>
    </div>
  );
}
