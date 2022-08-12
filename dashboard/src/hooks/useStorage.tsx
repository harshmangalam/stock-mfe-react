export default function useStorage() {
  const getStocks = () => {
    return localStorage.getItem("stocks")
      ? JSON.parse(localStorage.getItem("stocks") as string)
      : [];
  };

  const addStock = (stock) => {
    const stocks = getStocks();
    localStorage.setItem("stocks", JSON.stringify([...stocks, stock]));
  };

  const deleteStock = (stockId: string) => {
    const stocks = getStocks().filter((s) => s.id !== stockId);
    localStorage.setItem("stocks", JSON.stringify(stocks));
  };

  const addStocks = (stocks) => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  };
  return { getStocks, addStocks, addStock };
}
