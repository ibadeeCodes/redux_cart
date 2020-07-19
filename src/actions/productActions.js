import { GET_PRODUCTS, SET_LOADING } from './types'

//Get products from server

export const getProducts = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/products')
    const data = await res.json()
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    //   dispatch({
    //     type: LOGS_ERROR,
    //     payload: err.response.data,
    //   })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
