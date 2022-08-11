export default function useStorage() {
  const getStocks = () => {
    return localStorage.getItem("stocks")
      ? JSON.parse(localStorage.getItem("stocks") as string)
      : [];
  };

  const saveStock = (stock) => {
    localStorage.setItem("stocks", JSON.stringify(stock));
  };
  return { getStocks, saveStock };
}
