"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { InitialData } from "@/types";
import { useRef } from "react";
import { setInitialData } from "@/store/searchSlice";

function Providers({
  initialData,
  children,
}: {
  initialData: InitialData[];
  children: React.ReactNode;
}) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setInitialData(initialData));
    loaded.current = true;
  }

  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
