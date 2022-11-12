import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

type IchildrenInput = { height: number; width: number };
type IRespnsiveness = {
  children?: (input: IchildrenInput) => void;
};

const PageResponsive = ({ children }: IRespnsiveness) => {
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const setPageSize = debounce(
    useCallback(() => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }, []),
    300
  );

  useEffect(() => {
    setPageSize();
    window.addEventListener("resize", setPageSize);
    return () => window.removeEventListener("resize", setPageSize);
  }, []);

  return <>{children?.({ height, width })}</>;
};

export default PageResponsive;
