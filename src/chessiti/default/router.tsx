import { lazy } from "react";
import { iRouterInput } from "../../hocs/route.hoc";
import DefaultIndex from "./pages";

const LandingPage = lazy(() => import("./pages/landing"));

export default function defaultRoutes({ subOutlet }: Partial<iRouterInput>) {
  if (!subOutlet) throw new Error("subRoute outlet not supplied to defaultRoutes outlet");
  return subOutlet("", <DefaultIndex />, [subOutlet("", <LandingPage />)]);
}
