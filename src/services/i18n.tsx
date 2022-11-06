import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import { ILanguage } from "./i18n.interface";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false
    },
    fallbackLng: ILanguage.EN,
    debug: process.env.NODE_ENV === "development"
  });

export default i18next;
