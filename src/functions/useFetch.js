import { useEffect, useReducer } from 'react';

 const initialState = {
    resutl: null,
    loading: true,
    error: null
  };

  const fetchReducer = (state, action) => {
    if ( action.type === "LOADING") {
      return {
        resutl: null,
        loading: true,
        error: null
      }
    }
    if(action.type === "COMPLETE") {
      return {
        result: action.payload.response,
        loading: false,
        error: null
      }
    }
    if(action.type === "ERROR") {
      return {
        result: null,
        loading: false,
        error: action.payload.error
      }
    }

    return state;
   }

const useFetch = url => {
  const [ state, dispatch ] = useReducer(fetchReducer, initialState);
  
  useEffect(() => {
    dispatch({ type: "LOADING"});

    const getUrl = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'COMPLETE', payload: { response: data }})
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error }});
      }
    }
    getUrl();
  },[url])
  
  return [state.result, state.loading, state.error];
}

export default useFetch;