import { useDispatch, useSelector } from 'react-redux'
import { setName } from '@/store/slice/user'
import { login } from '@/api'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
// useSelector 用来加载state中的数据

function Home() {
  const state = useSelector(state => state.student)
  const dispatch = useDispatch()
  const onSetName = () => {
    dispatch(setName('孙悟空'))
  }

  const { loading, error, fetchData } = useFetch(login)

  useEffect(() => {
    fetchData()
    fetchData()
  }, [])

  return (
    <div>
      <p>{loading ? 'loading...' : 'loaded'}</p>
      <p>{JSON.stringify(error)}</p>
      home{state.name} <button onClick={onSetName}>改名字</button>
    </div>
  )
}

export default Home
