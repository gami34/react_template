import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

export default function AuthIndex() {
  const parentContext: any = useOutletContext();
  return <Outlet context={parentContext} />;
}
