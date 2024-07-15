import SearchModal from "@/storefront/components/search/templates/search-modal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sök",
  description: "Utforska vårt sortiment av produkter.",
};

export default function SearchModalRoute() {
  return <SearchModal />;
}
