import { FC } from "react";

import * as Head from "next/head";

import styles from "./TestComponent.module.scss";

export const InvokeNextHead: FC = () => {
  <Head.default>text</Head.default>;
  Head.defaultHead(false);

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
