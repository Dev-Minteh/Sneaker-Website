import React, { createContext, use, useContext, useReducer } from "react";
import { useEffect } from "react";
import { initialState, reducer } from "../components/reducer/AppReducer";

const AppContext = createContext();

export function AppProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initialState,);
   const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    cart: JSON.parse(localStorage.getItem("cart")) || []
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
};
