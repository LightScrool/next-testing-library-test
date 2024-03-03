import { FC } from "react";

import * as Router from "next/router";

import styles from "./TestComponent.module.scss";

export const ImportNextRouter: FC = () => {
  if (false) {
    Router.default.router;
  }

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
