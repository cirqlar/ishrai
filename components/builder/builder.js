import Banner from "./banner";
import PictureByText from "./pictureByText";

export default function PageBuilder({ sections }) {
  return sections && sections.length > 0 ? (
    <>
      {sections.map((section, index) => {
        switch (section.template) {
          case "banner-section":
            return <Banner key={section.title} {...section} />;
          case "picture-beside-text":
            return <PictureByText key={index} {...section} />;
          default:
            return "";
        }
      })}
    </>
  ) : (
    ""
  );
}
