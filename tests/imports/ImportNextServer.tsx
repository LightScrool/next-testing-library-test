import { FC } from "react";

import * as Server from "next/server";

import styles from "./TestComponent.module.scss";

export const ImportNextServer: FC = () => {
  if (false) {
    Server.userAgent({
      headers: {} as unknown as Headers,
    });
  }

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
