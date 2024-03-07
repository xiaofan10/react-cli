import { useState } from 'react'

function useFetch(fetchFn) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async params => {
    setLoading(true)
    setTimeout(async () => {
      try {
        const response = await fetchFn(params)
        setData(response)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }, 3000)
  }

  return { data, loading, error, fetchData }
}

export default useFetch
// useEffect(() => {
//   let isMounted = true;
//   const source = request.createCancelToken();

//   fetchData();

//   return () => {
//     isMounted = false;
//     if (!completed && source) {
//       console.log("执行卸载了", source);
//       source.cancel("Request canceled by cleanup");
//     }
//   };
// }, []);
