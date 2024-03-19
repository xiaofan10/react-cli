import { useEffect, useState } from 'react'

function useFetch(fetchFn) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // 标记当前请求是否完成
  let isComplete = false
  // 存储取消请求的函数
  let fetching = {}

  const fetchData = async params => {
    // 重复请求，取消之前的请求
    if (fetching && fetching.cancel) {
      fetching.cancel()
    }
    // 标记当前请求是否完成
    isComplete = false
    setLoading(true)
    try {
      fetching = fetchFn(params)
      const response = await fetching.fetch()
      setData(response)
      setLoading(false)
      isComplete = true
    } catch (error) {
      // 对取消的请求不做处理
      if (error.code !== 'ERR_CANCELED') {
        setError(error)
        setLoading(false)
        return error
      }
    }
  }
  // 组建销毁，如果存在请求中的请求，则取消请求
  useEffect(() => {
    return () => {
      if (!isComplete) {
        fetching.cancel()
      }
    }
  }, [])

  return { data, loading, error, fetchData }
}

export default useFetch
