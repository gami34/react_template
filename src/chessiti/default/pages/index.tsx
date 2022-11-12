import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

export default function DefaultIndex() {
  // const { t } = useTranslation();
  const parentContext: any = useOutletContext();

  return <Outlet context={parentContext} />;
}
