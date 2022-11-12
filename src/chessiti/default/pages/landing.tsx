import React, { useLayoutEffect } from "react";
// import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { LanguageSwitcher } from "../../components/Buttons";
import { TITLES } from "../../constant";
import Counter from "../component";

export default function LandingPage() {
  // const { t } = useTranslation();
  const { height, width }: any = useOutletContext();

  useLayoutEffect(() => {
    document.title = TITLES.HOME;
    return () => {};
  }, []);

  return (
    <div className="flex flex-col justify-center items-center" style={{ height, width }}>
      <LanguageSwitcher />
      <div>
        <img className="w-32" src="/vite.svg" alt="Vite logo" />
      </div>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
      <Counter />
      Landing Page {height} {width}
    </div>
  );
}
