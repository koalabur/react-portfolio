import Link from "next/link";

// Styles
import styles from "/styles/projects/modalLink/v1.module.scss";

export default function ModalLink({ link, linkType }) {
  function linkTypeHandler() {
    switch (linkType) {
      case "github":
        return "Visit Github Repo";
      case "website":
        return "Visit Site";
    }
  }
  return (
    <Link className={styles["modal-link"]} href={link} target="_blank">
      {linkTypeHandler()}
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["modal-link__icon"]}
      >
        <path
          d="M11.29 12.71a1 1 0 0 0 1.41 0l5.3-5.3 1.29 1.29A1 1 0 0 0 21 8V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-.71 1.71L16.59 6l-5.29 5.29a1 1 0 0 0-.01 1.42Z"
          fill="#31265b"
        ></path>
        <path
          d="M4 21h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-2 0v7H5V5h7a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
          fill="#31265b"
        ></path>
      </svg>
    </Link>
  );
}
