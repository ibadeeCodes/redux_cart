import {
  ADD_TO_CART,
  SET_LOADING,
  DELETE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
  CLEAR_CART,
} from './types'

//Get products from server

export const addToCart = ({ id, name, quantity, price, totalPrice }) => async (
  dispatch
) => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, quantity, price, totalPrice },
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteFromCart = (id) => async (dispatch) => {
  console.log('ran')
  console.log(id)
  try {
    dispatch({
      type: DELETE_FROM_CART,
      payload: id,
    })
  } catch (err) {
    console.log(err)
  }
}

export const incrementItem = (id) => async (dispatch) => {
  console.log('increment')
  try {
    dispatch({
      type: INCREMENT_CART_ITEM,
      payload: id,
    })
  } catch (err) {
    console.log(err)
  }
}

export const decrementItem = (id) => async (dispatch) => {
  console.log('decrement')
  try {
    dispatch({
      type: DECREMENT_CART_ITEM,
      payload: id,
    })
  } catch (err) {
    console.log(err)
  }
}

export const clearCart = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CART,
    })
    console.log('clearcart')
  } catch (err) {
    console.log(err)
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
