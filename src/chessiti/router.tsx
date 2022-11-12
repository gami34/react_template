import { lazy } from "react";
import { simpleRoute } from "../hocs/route.hoc";
import authRoutes from "./authentication/router";
import defaultRoutes from "./default/router";
import ErrorPage from "./error.page";
import Loader from "./loader";

const Chessiti = lazy(() => import("."));

const [mainOutlet, subOutlet] = simpleRoute(<Loader />, <ErrorPage />);

export default function chessitiRouter() {
  return mainOutlet("/", <Chessiti />, [defaultRoutes({ subOutlet }), authRoutes({ subOutlet }), subOutlet("*", <ErrorPage />)]);
}
