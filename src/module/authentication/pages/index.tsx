import React from "react";
import { useTranslation } from "react-i18next";
import Counter, { LanguageSwitcher } from "../component";
import { Link, Outlet } from "react-router-dom";

export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <ul className=" w-full flex gap-4 justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/next">Nest</Link>
        </li>
      </ul>
      <LanguageSwitcher />
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <h1>{t("app_name")}</h1>
      <h3>{t("hello_user", { user: "Gideon" })}</h3>
      <Counter />
      {<Outlet />}
    </div>
  );
}
