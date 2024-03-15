import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import ShopFilterSection from "./ShopFilterSection";
import { Fragment, useState } from "react";

const sections = [
  {
    id: "type",
    name: "Type",
    type: "list",
    options: [
      { value: "indoors", label: "Indoors", checked: false },
      { value: "outdoors", label: "Outdoors", checked: false },
    ],
    collapsible: false,
    selected: [],
  },
  {
    id: "price",
    name: "Price",
    type: "slider",
    options: { min: 0, max: 80, value: undefined },
  },
  {
    id: "height",
    name: "Height",
    type: "list",
    options: [
      { value: "short", label: "Short", checked: false },
      { value: "tall", label: "Tall", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    type: "list",
    options: [
      { value: "small", label: "Small", checked: false },
      { value: "medium", label: "Medium", checked: false },
      { value: "large", label: "Large", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShopFilter() {
  return (
    <form className="hidden lg:block">
      {sections.map((section) => (
        <ShopFilterSection key={section.id} section={section} />
      ))}
    </form>
  );
}
