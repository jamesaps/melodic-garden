import ShopFilterSectionList from "./ShopFilterSectionList";

export default function ShopFilterSection({
  section,
}) {
  switch (section.type) {
    case "list":
      return (
        <ShopFilterSectionList
          section={section}
        />
      );
    case "slider":
    default:
      return <></>;
  }
}
