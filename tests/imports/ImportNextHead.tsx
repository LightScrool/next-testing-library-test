import { FC } from "react";

import * as Head from "next/head";

import styles from "./TestComponent.module.scss";

export const ImportNextHead: FC = () => {
  if (false) {
    <Head.default>text</Head.default>;
  }

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
