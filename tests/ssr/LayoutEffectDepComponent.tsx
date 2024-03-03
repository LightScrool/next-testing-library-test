import { useEffect, useLayoutEffect, useState } from "react";

export const LayoutEffectDepComponent = () => {
  const [text, setText] = useState("ssr text");

  useLayoutEffect(() => {
    setText("client text");
  }, []);

  useEffect(() => {
    setText("effect text");
  }, []);

  return <span>{text}</span>;
};
