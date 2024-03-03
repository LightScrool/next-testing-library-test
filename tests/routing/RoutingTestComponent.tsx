import { useRouter } from "next/router";

export const RoutingTestComponent = () => {
  const { asPath } = useRouter();

  return <span>{asPath}</span>;
};
