import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementByAmount } from "./reducer";
import { useTranslation } from "react-i18next";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <button aria-label="Increment value" className="bg-green-500 rounded-lg p-2" onClick={() => dispatch(incrementByAmount(5))}>
          Increment
        </button>
        <span>{t("basket_delivered", { count })}</span>
        <button aria-label="Decrement value" className="bg-green-800 rounded-lg p-2" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
    </div>
  );
}
