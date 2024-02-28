import { useState, useEffect } from "react";

function useFetch(request, url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let completed = false;

  useEffect(() => {
    let isMounted = true;
    const source = request.createCancelToken();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await request.instance(url, {
          ...options,
          cancelToken: source.token,
        });
        completed = true;
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      if (!completed && source) {
        console.log("执行卸载了", source);
        source.cancel("Request canceled by cleanup");
      }
    };
  }, []);

  return { data, loading, error };
}

export default useFetch;
