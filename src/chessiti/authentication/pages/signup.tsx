import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Signup() {
  const { t } = useTranslation();
  return (
    <div className="p-5">
      {t("p_text")}
      <Link to="/">Home</Link>
    </div>
  );
}
