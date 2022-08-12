import * as React from "react";
import useStorage from "../hooks/useStorage";
import shortid from "shortid";

export interface IStock {
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
  removeStock: (stockId: string) => void;
  editStock: (stockId: string, stock: IStock) => void;
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
  const { getStocks, addStock, addStocks } = useStorage();

  const createStock = (stock: IStock) => {
    const id = shortid();
    const payload = { id, ...stock };
    dispatch({ type: "CREATE", payload });
    addStock(payload);
  };

  const removeStock = (stockId: string) => {
    const stocks = getStocks().filter((s) => s.id !== stockId);
    dispatch({ type: "SET_STOCKS", payload: stocks });
    addStocks(stocks);
  };

  const editStock = (id, data) => {
    const stocks = getStocks().map((stock) => {
      if (stock.id === id) {
        return data;
      }
      return stock;
    });

    dispatch({ type: "SET_STOCKS", payload: stocks });
    addStocks(stocks);
  };

  React.useEffect(() => {
    const stocks = getStocks();
    console.log(stocks);
    dispatch({ type: "SET_STOCKS", payload: stocks });
  }, []);

  return (
    <StockStateContext.Provider value={state}>
      <StockDispatchContext.Provider
        value={{ createStock, removeStock, editStock }}
      >
        {children}
      </StockDispatchContext.Provider>
    </StockStateContext.Provider>
  );
}

export const useStockState = () => React.useContext(StockStateContext);
export const useStockDispatch = () => React.useContext(StockDispatchContext);
