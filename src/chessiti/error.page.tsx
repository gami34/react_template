import { Link } from "react-router-dom";
import ButtonRipple from "./components/Buttons";
import { ROUTES } from "./routes";

export default function ErrorPage() {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold text-green-500 m-0 p-0">404</h1>
      <h2 className="uppercase text-slate-700 tracking-tighter font-bold text-2xl">Oops! Page not found</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-4"></div>
        <p className="text-sm col-span-12 sm:col-span-4">Sorry, the page you are looking for doesn&apos;t exist. if you think something is broken, report a problem.</p>
        <div className="col-span-12 sm:col-span-4"></div>
      </div>
      <div className="flex gap-2 justify-center">
        <ButtonRipple color="green" func={() => console.log("")}>
          <Link className="rounded-full p-1 min-w-[30px] bg-green-700  border border-green-500 text-white px-8" to={ROUTES.HOME}>
            Go Home
          </Link>
        </ButtonRipple>
        <ButtonRipple color="green" func={() => console.log("")}>
          <Link className="rounded-full p-1 px-4 border border-green-500" to={ROUTES.HOME}>
            Report Problem
          </Link>
        </ButtonRipple>
      </div>
    </div>
  );
}
