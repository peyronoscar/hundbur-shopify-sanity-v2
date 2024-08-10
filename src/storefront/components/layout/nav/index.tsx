import { Suspense } from "react";

import Image from "next/image";
import logo from "@/public/images/logo.png";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import SideMenu from "./side-menu";
import CartButton from "./cart-button";

export default function Nav() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-white border-b border-ui-border-base">
        <nav className="flex items-center justify-between w-full h-full content-container txt-xsmall-plus text-ui-fg-subtle text-small-regular">
          <div className="flex items-center flex-1 h-full basis-0">
            <div className="h-full">
              <SideMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="uppercase txt-compact-xlarge-plus hover:text-ui-fg-base"
            >
              <Image
                src={logo}
                alt="Logo"
                className="w-auto h-8 md:h-10"
                height={100}
              />
            </Link>
          </div>

          <div className="flex items-center justify-end flex-1 h-full gap-x-6 basis-0">
            <div className="items-center hidden h-full small:flex gap-x-6">
              <Link
                className="hover:text-ui-fg-base"
                href="/search"
                scroll={false}
              >
                Sök
              </Link>
              <Link className="hover:text-ui-fg-base" href="/store">
                Butik
              </Link>
            </div>
            <Suspense
              fallback={
                <Link className="flex gap-2 hover:text-ui-fg-base" href="/cart">
                  <ShoppingBag className="w-5 h-5" /> (0)
                </Link>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  );
}
