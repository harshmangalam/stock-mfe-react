export default function useStorage() {
  const getStocks = () => {
    return localStorage.getItem("stocks")
      ? JSON.parse(localStorage.getItem("stocks") as string)
      : [];
  };

  const saveStock = (stock) => {
    const stocks = getStocks();
    localStorage.setItem("stocks", JSON.stringify([...stocks, stock]));
  };
  return { getStocks, saveStock };
}
