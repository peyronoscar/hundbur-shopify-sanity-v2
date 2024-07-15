"use client";

import { useQueryParams } from "@/storefront/lib/hooks/use-query-params";
import { EllipseMiniSolid } from "@medusajs/icons";
import { Label, RadioGroup, Text, clx } from "@medusajs/ui";
import { ChangeEvent } from "react";

type FilterItem = {
  value: string;
  label: string;
  children?: FilterItem[];
};

type FilterRadioItemProps = {
  item: FilterItem;
  value: any;
  handleChange: (...args: any[]) => void;
};

const FilterRadioItem = ({
  value,
  handleChange,
  item,
}: FilterRadioItemProps) => {
  return (
    <div className="ml-3">
      <div
        key={item.value}
        className={clx("flex gap-x-2 items-center", {
          "ml-[-1.75rem]": item.value === value,
        })}
      >
        {item.value === value && <EllipseMiniSolid />}
        <RadioGroup.Item
          checked={item.value === value}
          onClick={(e) =>
            handleChange(
              e as unknown as ChangeEvent<HTMLButtonElement>,
              item.value
            )
          }
          className="hidden peer"
          id={item.value}
          value={item.value}
        />
        <Label
          htmlFor={item.value}
          className={clx(
            "!txt-compact-small !transform-none text-ui-fg-subtle hover:cursor-pointer",
            {
              "text-ui-fg-base": item.value === value,
            }
          )}
        >
          {item.label}
        </Label>
      </div>
      {item.children && (
        <ul>
          {item.children.map((child) => (
            <FilterRadioItem
              key={child.value}
              value={value}
              item={child}
              handleChange={handleChange}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

type FilterRadioGroupProps = {
  title: string;
  items: FilterItem[];
  value: any;
  param: string;
};

const FilterRadioGroup = ({
  title,
  items,
  value,
  param,
}: FilterRadioGroupProps) => {
  const { setQueryParams } = useQueryParams();

  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newValue = e.target.value as string;
    setQueryParams(param, newValue, ["page"]);
  };

  return (
    <div className="flex flex-col gap-x-3 gap-y-3">
      <Text className="txt-compact-small-plus text-muted-foreground">
        {title}
      </Text>
      <RadioGroup>
        {items?.map((i) => (
          <FilterRadioItem
            key={i.value}
            value={value}
            item={i}
            handleChange={handleChange}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterRadioGroup;
