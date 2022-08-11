export default function useStorage() {
  const getStocks = () => {
    return localStorage.getItem("stocks")
      ? JSON.parse(localStorage.getItem("stocks") as string)
      : [];
  };
  return { getStocks };
}
