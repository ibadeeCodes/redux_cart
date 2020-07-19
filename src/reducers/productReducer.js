import { GET_PRODUCTS, SET_LOADING } from '../actions/types'

const initialState = {
  products: null,
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
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
  }
}
