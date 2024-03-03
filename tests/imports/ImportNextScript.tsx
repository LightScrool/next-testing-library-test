import { FC } from "react";

import * as Script from "next/script";

import styles from "./TestComponent.module.scss";

export const ImportNextScript: FC = () => {
  if (false) {
    <Script.default />;
  }

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
