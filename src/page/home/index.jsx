import { useDispatch, useSelector } from 'react-redux'
import { setName } from '@/store/slice/user'
// useSelector 用来加载state中的数据

function Home() {
  const state = useSelector(state => state.student)
  console.log(state)
  const dispatch = useDispatch()
  const onSetName = () => {
    dispatch(setName('孙悟空'))
  }
  return (
    <div>
      home{state.name} <button onClick={onSetName}>改名字</button>
    </div>
  )
}

export default Home
