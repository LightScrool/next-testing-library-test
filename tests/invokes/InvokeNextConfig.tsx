import { FC } from "react";

import * as Config from "next/config";

import styles from "./TestComponent.module.scss";

export const InvokeNextConfig: FC = () => {
  Config.default();
  Config.setConfig({});

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
