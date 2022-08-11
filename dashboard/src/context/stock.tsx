import * as React from "react";
import useStorage from "../hooks/useStorage";
import shortid from "shortid";

interface IStock {
  id?: string;
  category: string;
  items: string[];
  cost: number;
}

type StockStateContextType = {
  stocks: IStock[];
};

type StockDispatchContextType = {
  createStock: (stock: IStock) => void;
};

const initialArg = {
  stocks: [],
};

const StockStateContext = React.createContext<StockStateContextType | null>(
  null
);
const StockDispatchContext =
  React.createContext<StockDispatchContextType | null>(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CREATE":
      return {
        ...state,
        stocks: [...state.stocks, payload],
      };

    case "SET_STOCKS":
      return {
        ...state,
        stocks: payload,
      };
  }
};

export default function StockProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialArg);
  const { getStocks, saveStock } = useStorage();

  const createStock = (stock: IStock) => {
    const id = shortid();
    const payload = { id, ...stock };
    dispatch({ type: "CREATE", payload });
    saveStock(payload);
  };

  React.useEffect(() => {
    const stocks = getStocks();
    console.log(stocks);
    dispatch({ type: "SET_STOCKS", payload: stocks });
  }, []);

  return (
    <StockStateContext.Provider value={state}>
      <StockDispatchContext.Provider value={{ createStock }}>
        {children}
      </StockDispatchContext.Provider>
    </StockStateContext.Provider>
  );
}

export const useStockState = () => React.useContext(StockStateContext);
export const useStockDispatch = () => React.useContext(StockDispatchContext);
