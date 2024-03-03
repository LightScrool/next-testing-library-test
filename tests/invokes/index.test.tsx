import { FC } from "react";
import { render, screen } from "../../next-testing-library";

import { InvokeNext } from "./InvokeNext";
import { InvokeNextApp } from "./InvokeNextApp";
import { InvokeNextConfig } from "./InvokeNextConfig";
import { InvokeNextHead } from "./InvokeNextHead";
import { InvokeNextLink } from "./InvokeNextLink";
import { InvokeNextRouter } from "./InvokeNextRouter";
import { InvokeNextScript } from "./InvokeNextScript";
import { InvokeNextServer } from "./InvokeNextServer";

const runTest = async (Component: FC) => {
  const renderImportTestComponent = () => render(<Component />);

  expect(renderImportTestComponent).not.toThrow();

  expect(await screen.findByText("Test text")).toBeVisible();
};

describe("Just invoking anything from next modules shouldn't throw an error", () => {
  test('Invoking anything from module "next" shouldn\'t throw an error', async () => {
    await runTest(InvokeNext);
  });

  test('Invoking anything from module "next/app" shouldn\'t throw an error', async () => {
    await runTest(InvokeNextApp);
  });

  test('Invoking anything from module "next/config" shouldn\'t throw an error', async () => {
    await runTest(InvokeNextConfig);
  });

  test('Invoking anything from module "next/head" shouldn\'t throw an error', async () => {
    await runTest(InvokeNextHead);
  });

  test('Invoking anything from module "next/link" shouldn\'t throw an error', async () => {
    await runTest(InvokeNextLink);
  });

  test('Invoking anything from module "next/router" shouldn\'t throw an error', async () => {
    await runTest(InvokeNextRouter);
  });

  test('Invoking anything from module "next/script" shouldn\'t throw an error', async () => {
    await runTest(InvokeNextScript);
  });

  test('Invoking anything from module "next/server" shouldn\'t throw an error', async () => {
    await runTest(InvokeNextServer);
  });
});
