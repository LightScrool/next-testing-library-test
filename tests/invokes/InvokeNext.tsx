import { FC } from "react";

import * as Next from "next";

import styles from "./TestComponent.module.scss";

export const InvokeNext: FC = () => {
  Next.default({});

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
