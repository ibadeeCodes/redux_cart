import {
  ADD_TO_CART,
  SET_LOADING,
  DELETE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
  CLEAR_CART,
} from '../actions/types'

const initialState = {
  cartItems: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ADD_TO_CART:
      const AlreadyExist = state.cartItems.some((item) => {
        if (item.id === action.payload.id) {
          item.quantity += action.payload.quantity // which is set as 1...
          item.totalPrice += item.price // item total price ma item price add kardi...
          return 1
        }
      })
      if (AlreadyExist) {
        return {
          ...state,
          loading: false,
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          loading: false,
        }
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => action.payload !== item.id),
      }
    case INCREMENT_CART_ITEM:
      const increment = state.cartItems.some((item) => {
        if (item.id === action.payload) {
          item.quantity += 1 // increment by 1
          item.totalPrice += item.price
          return 1
        }
      })
      console.log(increment)
      if (increment) {
        return {
          ...state,
        }
      }
    case DECREMENT_CART_ITEM:
      const decrement = state.cartItems.some((item) => {
        if (item.id === action.payload) {
          if (item.quantity === 1) {
            return -1
          } else {
            item.quantity -= 1 //decrement by 1
            item.totalPrice -= item.price
            return 1
          }
        }
      })
      if (decrement) {
        return {
          ...state,
        }
      }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
  }
}
