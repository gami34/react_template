import React from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="p-5">{t("p_text")}</div>
    </div>
  );
}
