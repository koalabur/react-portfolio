// Contentful rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, INLINES, BLOCKS } from "@contentful/rich-text-types";

// Styles
import styles from "/styles/projects/contentfulRichText/v1.module.scss";

export default function ContentfulRichText({ data }) {
  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return <>{text}</>;
      },
      [MARKS.BOLD]: (text) => {
        return <strong>{text}</strong>;
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>;
      },
      [INLINES.HYPERLINK]: (node) => {
        const text = node.content.find(
          (item) => item.nodeType === "text"
        )?.value;
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        );
      },
    },
  };

  return (
    <div className={styles["contentful-rich-text"]}>
      {documentToReactComponents(data, options)}
    </div>
  );
}
