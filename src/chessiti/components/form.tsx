import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { IChildren } from "./interface";

// FORM COMPONENTS COLLECITONS
export const AuthFormWrapper = ({ children }: IChildren) => (
  <div className={`flex justify-center flex-col gap-2 w-full sm:w-4/12 md:w-6/12 lg:w-3/12 mx-8 my-2`}>
    <div>
      <Link to={ROUTES.HOME} className="mx-2 w-full block">
        <img className="w-full ml-2" src="/images/logo.PNG" alt="chessbattkefield logo" />
      </Link>
    </div>
    <div className="bg-green-light rounded-lg drop-shadow-lg shadow-green-dark px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">{children}</div>
  </div>
);
