import { useEffect, useState } from "react";
import { makeRequest } from "../utils/makeRequest";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await makeRequest(url);
        setData(response.data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
