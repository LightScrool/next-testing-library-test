import { FC } from "react";

import * as Link from "next/link";

import styles from "./TestComponent.module.scss";

export const InvokeNextLink: FC = () => {
  <Link.default href="https://example.com">link</Link.default>;

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
