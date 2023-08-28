import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface GlobalStateInterface {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const GlobalStateContext = createContext({
  state: [] as Array<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Array<GlobalStateInterface>>>,
  stateHorror: [] as Array<GlobalStateInterface>,
  setStateHorror: {} as Dispatch<SetStateAction<Array<GlobalStateInterface>>>,
  stateAction: [] as Array<GlobalStateInterface>,
  setStateAction: {} as Dispatch<SetStateAction<Array<GlobalStateInterface>>>,
  stateComedy: [] as Array<GlobalStateInterface>,
  setStateComedy: {} as Dispatch<SetStateAction<Array<GlobalStateInterface>>>,
});

const GlobalStateProvider = ({
  children,
  value = {} as Array<GlobalStateInterface>,
}: {
  children: React.ReactNode;
  value?: Array<GlobalStateInterface>;
}) => {
  const [state, setState] = useState(value);
  const [stateHorror, setStateHorror] = useState(value);
  const [stateAction, setStateAction] = useState(value);
  const [stateComedy, setStateComedy] = useState(value);
  return (
    <GlobalStateContext.Provider
      value={{
        state,
        setState,
        stateHorror,
        setStateHorror,
        stateAction,
        setStateAction,
        stateComedy,
        setStateComedy,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
