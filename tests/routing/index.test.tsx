import { render, renderHook, screen } from "../../next-testing-library";

import { RoutingTestComponent } from "./RoutingTestComponent";
import { useRouter } from "next/router";

describe("Rendering functions should provide API for overriding router", () => {
  test("RoutingTestComponent should render path on screen", async () => {
    const path = "/abcd?param1=123";

    render(<RoutingTestComponent />, { path });

    expect(await screen.findByText(path)).toBeVisible();
  });

  test("Next's useRouter().asPath should return path", () => {
    const path = "/abcd?param1=123";

    const {
      result: { current: result },
    } = renderHook(() => useRouter().asPath, { path });

    expect(result).toBe(path);
  });
});
