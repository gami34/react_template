import React from "react";
// import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import PageResponsive from "../hocs/page.responsiveness";

export default function Chessiti() {
  // const { t } = useTranslation();
  return (
    <PageResponsive>
      {({ height, width }) => (
        <div className="overflow-hidden" style={{ height, width }}>
          <div className="h-full overflow-auto custom-scrollbar flex justify-center items-center">
            <Outlet context={{ height, width }} />
          </div>
        </div>
      )}
    </PageResponsive>
  );
}
