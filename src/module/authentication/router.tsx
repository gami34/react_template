import { lazy } from "react";
import { simpleRoute } from "../../hocs/route.hoc";
import ErrorPage from "./error.page";
import Loader from "./loader";

const Home = lazy(() => import("./pages"));
const Page = lazy(() => import("./pages/page"));
const [mainOutlet, subOutlet] = simpleRoute(<Loader />, <ErrorPage />);

export default function authRoutes() {
  return mainOutlet("/", <Home />, [subOutlet("", <Page />)]);
}
