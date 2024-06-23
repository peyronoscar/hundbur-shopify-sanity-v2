import productFragment from '../fragments/product';
import variantFragment from '../fragments/variant';

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductAvailabilityQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle){
      availableForSale
      totalInventory
      variants(first: 10) {
        edges {
          node {
            ...variant
          }
        }
      }
    }
  }
  ${variantFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String, $first: Int = 100) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: $first) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;
