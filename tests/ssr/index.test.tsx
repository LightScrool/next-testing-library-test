import { serverRender, render, screen } from "../../next-testing-library";

import { CorrectSsrComponent } from "./CorrectSsrComponent";
import { LayoutEffectDepComponent } from "./LayoutEffectDepComponent";

describe("Testing rendering functions on ssr", () => {
  test("Should correctly render component without layout dependencies on effects and window API", async () => {
    const renderComponent = () => serverRender(<CorrectSsrComponent />);

    expect(renderComponent).not.toThrow();
    expect(await screen.findByText("CorrectSsrComponent")).toBeVisible();
  });

  test("Should render layout without useEffect and useLayoutEffect", async () => {
    const renderComponent = () => serverRender(<LayoutEffectDepComponent />);

    expect(renderComponent).not.toThrow();
    expect(await screen.findByText("ssr text")).toBeVisible();
  });

  test("Shouldn't affect next call of render function", async () => {
    serverRender(<LayoutEffectDepComponent />);
    render(<LayoutEffectDepComponent />);

    expect(await screen.findByText("effect text")).toBeVisible();
  });

  test('Texting extension of expect "toRenderSameOnSsr"', () => {
    expect(<CorrectSsrComponent />).toRenderSameOnSsr();
    expect(<LayoutEffectDepComponent />).not.toRenderSameOnSsr();
  });
});
