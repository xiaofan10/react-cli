import { useReducer } from 'react'
import PropTypes from 'prop-types'
function ShopList({ info, add, reduce }) {
  console.log('ShopList update')
  const listArr = new Array(info.total).fill('玉米')
  return (
    <ul>
      {listArr.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={add}>+</button>
          <button onClick={reduce}>-</button>
        </li>
      ))}
    </ul>
  )
}

ShopList.propTypes = {
  info: PropTypes.object,
  add: PropTypes.func,
  reduce: PropTypes.func,
}

function ShopCar({ info }) {
  return (
    <div>
      总金额：
      {info.totalPrice}
      {info.unit}
    </div>
  )
}

ShopCar.propTypes = {
  info: PropTypes.object,
}

function shoppingCartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        total: state.total + 1,
        totalPrice: (state.total + 1) * state.price,
      }
    case 'REDUCE':
      return {
        ...state,
        total: state.total - 1,
        totalPrice: (state.total - 1) * state.price,
      }
    default:
      return state
  }
}

function ShoppingCart() {
  const [shopInfo, dispatch] = useReducer(shoppingCartReducer, {
    total: 0,
    price: 10,
    unit: '元',
    totalPrice: 0,
  })
  const add = () => {
    dispatch({
      type: 'ADD',
      payload: {},
    })
  }
  const reduce = () => {
    dispatch({
      type: 'REDUCE',
      payload: {},
    })
  }

  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={reduce}>-</button>
      <ShopList info={shopInfo} add={add} reduce={reduce}></ShopList>
      <ShopCar info={shopInfo}></ShopCar>
    </div>
  )
}

function Lesson() {
  return <ShoppingCart />
}

export default Lesson
