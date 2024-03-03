import { FC } from "react";

import * as Script from "next/script";

import styles from "./TestComponent.module.scss";

export const InvokeNextScript: FC = () => {
  <Script.default />;
  Script.initScriptLoader([]);
  Script.handleClientScriptLoad({});

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
