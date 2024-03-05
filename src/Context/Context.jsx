import { createContext, useState } from "react";

const initialState = {
  easyMode: false,
  setEasyMode: () => {},
};
export const GameContext = createContext(initialState);
export const GameProvider = ({ children }) => {
  const [easyMode, setEasyMode] = useState(false);

  return <GameContext.Provider value={{ easyMode, setEasyMode }}>{children}</GameContext.Provider>;
};
