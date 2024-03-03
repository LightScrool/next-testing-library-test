import { FC } from "react";

import App from "next/app";
import * as Router from "next/router";

import styles from "./TestComponent.module.scss";

export const InvokeNextRouter: FC = () => {
  Router.default.router;
  Router.useRouter();
  Router.withRouter(App);

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
