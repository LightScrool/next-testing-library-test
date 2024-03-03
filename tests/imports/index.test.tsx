import {FC} from "react";
import { render, screen } from "../../next-testing-library";

import { ImportNext } from "./ImportNext";
import { ImportNextApp } from "./ImportNextApp";
import { ImportNextConfig } from "./ImportNextConfig";
import { ImportNextHead } from "./ImportNextHead";
import { ImportNextLink } from "./ImportNextLink";
import { ImportNextRouter } from "./ImportNextRouter";
import { ImportNextScript } from "./ImportNextScript";
import { ImportNextServer } from "./ImportNextServer";

const runTest = async (Component: FC) => {
  const renderImportTestComponent = () => render(<Component />);

  expect(renderImportTestComponent).not.toThrow();

  expect(await screen.findByText("Test text")).toBeVisible();
}

describe("Importing anything from next modules shouldn't throw an error", () => {
  test("Importing module \"next\" shouldn't throw an error", async () => {
    await runTest(ImportNext);
  });

  test("Importing module \"next/app\" shouldn't throw an error", async () => {
    await runTest(ImportNextApp);
  });

  test("Importing module \"next/config\" shouldn't throw an error", async () => {
    await runTest(ImportNextConfig);
  });

  test("Importing module \"next/head\" shouldn't throw an error", async () => {
    await runTest(ImportNextHead);
  });

  test("Importing module \"next/link\" shouldn't throw an error", async () => {
    await runTest(ImportNextLink);
  });

  test("Importing module \"next/router\" shouldn't throw an error", async () => {
    await runTest(ImportNextRouter);
  });

  test("Importing module \"next/script\" shouldn't throw an error", async () => {
    await runTest(ImportNextScript);
  });

  test("Importing module \"next/server\" shouldn't throw an error", async () => {
    await runTest(ImportNextServer);
  });
});
