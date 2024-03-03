import { FC } from "react";

import * as Next from "next";

import styles from "./TestComponent.module.scss";

export const ImportNext: FC = () => {
  if (false) {
    Next.default({});
  }

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
