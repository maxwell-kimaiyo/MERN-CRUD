import {
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST
} from "../constants/productConstants"
import axios from 'axios';
import Axios from "axios";

const listProducts = () => async (dispatch) => {
  try {

    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products" );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  }
  catch (error) {

    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}

const saveProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
  
    if (!product._id) {
      const { data } = await Axios.post('/api/products', product);
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put('/api/products/' + product._id, product);
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }

  } catch (error) {

    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
}


const deleteProdcut = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    const { data } = await axios.delete("/api/products/" + productId,);
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });

  }
}

export { listProducts, saveProduct, deleteProdcut }