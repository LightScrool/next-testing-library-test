import { FC } from "react";

import * as Config from "next/config";

import styles from "./TestComponent.module.scss";

export const ImportNextConfig: FC = () => {
  if (false) {
    Config.default();
  }

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
