import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementByAmount } from "./reducer";
import { useTranslation } from "react-i18next";
import ButtonRipple from "../components/Buttons";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex gap-4">
        <ButtonRipple color="green">
          <button onClick={() => dispatch(incrementByAmount(5))} className="flex flex-row items-center space-x-1 rounded-full p-2 cursor-pointer bg-green-200 opacity-50">
            <span>Manage Categories</span>
          </button>
        </ButtonRipple>
        <span>{t("basket_delivered", { count })}</span>
        <ButtonRipple color="green">
          <button aria-label="Decrement value" className="bg-green-100 rounded-lg p-2" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </ButtonRipple>
      </div>
    </div>
  );
}
