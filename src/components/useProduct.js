import { useQuery } from "react-query";
import axios from "axios";

const useProduct = () => {
  const { isLoading, error, data } = useQuery("products", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  });

  return { isLoading, error, data };
};

export default useProduct;