import { CartItem } from "@/storefront/lib/shopify/types";
import { Heading, Table } from "@medusajs/ui";
import Item from "../components/item";
import SkeletonLineItem from "../../skeletons/components/skeleton-line-item";

type ItemsTemplateProps = {
  items?: CartItem[];
};

const ItemsTemplate = ({ items }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="flex items-center pb-3">
        <Heading className="text-[2rem] leading-[2.75rem]">Varukorg</Heading>
      </div>
      <Table>
        <Table.Header className="border-t-0">
          <Table.Row className="text-ui-fg-subtle txt-medium-plus">
            <Table.HeaderCell className="!pl-0">Artikel</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Antal</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell">
              Pris
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items
            ? items.map((item) => {
                return <Item key={item.id} item={item} />;
              })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />;
              })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ItemsTemplate;
