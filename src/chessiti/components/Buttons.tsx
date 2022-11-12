import React from "react";
import Ripples from "react-ripples";
import { useTranslation } from "react-i18next";

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

function ButtonRipple({ children, func, color }: { color: string; children: React.ReactElement; func?: (_input: any) => void }) {
  return (
    <Ripples className=" rounded-full" color={color} during={1200} onClick={func}>
      {children}
    </Ripples>
  );
}

export default ButtonRipple;
