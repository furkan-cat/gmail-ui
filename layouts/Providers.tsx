"use client";

import { Provider } from "react-redux";
import { store } from "@/libs/store";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

Providers.displayName = "Global Providers";

export default Providers;
