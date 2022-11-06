import "./App.css";
import { LanguageSwitcher } from "./module/authentication/component";
import { Routes } from "react-router-dom";
import authRoutes from "./module/authentication/router";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div>
        <LanguageSwitcher />
      </div>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>{t("app_name")}</h1>
      <h3>{t("hello_user", { user: "Gideon" })}</h3>
      <Routes>
        <>{authRoutes()}</>
      </Routes>
    </div>
  );
}

export default App;
