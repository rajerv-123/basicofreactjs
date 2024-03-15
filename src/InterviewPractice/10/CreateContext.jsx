import { createContext } from "react";

const initialContextState = {
  data: "Initial data",
  // this is initial value
};

export const contextState = createContext(initialContextState);
