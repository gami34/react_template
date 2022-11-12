import { lazy } from "react";
import { iRouterInput } from "../../hocs/route.hoc";

const AuthIndex = lazy(() => import("./pages"));
const Singup = lazy(() => import("./pages/signup"));

export default function authRoutes({ subOutlet }: Partial<iRouterInput>) {
  if (!subOutlet) throw new Error("subRoute outlet not supplied to authRoutes outlet");
  return subOutlet("", <AuthIndex />, [subOutlet("signup", <Singup />)]);
}
