import { PortableText, Product, ProxyString, Seo, ShopifyProduct, Slug } from "@/sanity.types";

export type ProductWithCategoryNotes = {
   _id: string;
   _type: "product";
   _createdAt: string;
   _updatedAt: string;
   _rev: string;
   hidden?: string;
   titleProxy?: ProxyString;
   slugProxy?: ProxyString;
   colorTheme?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
   };
   body?: PortableText;
   store?: ShopifyProduct;
   seo?: Seo;
   weight?: number;
   length?: number;
   width?: number;
   height?: number;
   categories?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
   }>;
   categoryPath?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
   }>;
   categoryNotes: Array<{
      category: {
         _id: string;
         _type: "category";
         _createdAt: string;
         _updatedAt: string;
         _rev: string;
         title?: string;
         slug?: Slug;
         parent?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
         };
         path?: Array<{
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            _key: string;
         }>;
      } | null;
      value?: string;
   }> | null;
   sales?: number;
};