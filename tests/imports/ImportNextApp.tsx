import { FC } from "react";

import * as App from "next/app";

import styles from "./TestComponent.module.scss";

export const ImportNextApp: FC = () => {
  if (false) {
    <App.default />;
  }

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
