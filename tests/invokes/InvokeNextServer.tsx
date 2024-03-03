import { FC } from "react";

import * as Server from "next/server";

import styles from "./TestComponent.module.scss";

export const InvokeNextServer: FC = () => {
  Server.userAgent({
    headers: {} as unknown as Headers,
  });
  Server.userAgentFromString("");
  const request = new Server.NextRequest(new URL("https://example.com"), {});
  new Server.NextFetchEvent({ page: "", request });
  new Server.NextResponse();
  new Server.URLPattern();

  return (
    <h1>
      <span className={styles.highlightedText}>Test text</span>
    </h1>
  );
};
