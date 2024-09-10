import React, { useEffect, useState, createContext, useContext, useReducer, } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export const ContextGlobal = createContext(undefined);

const reducer = (state, action) =>{
  switch(action.type){
    case "API_RESPONSE":
      return {...state, api: action.payload}
    case "LOCALSTORAGE":
      return {...state, favs: action.payload}
    case "ADD_DENTIS":
      return {...state, favs: [...state.favs, action.payload]}
    case "DEL_DENTIST":
      return {...state, favs: state.favs.filter((dentist) => dentist.id != action.payload)}
    case "THEME_DARK":
      return {...state, theme: "dark"}
    case "THEME_LIGTH":
      return {...state, theme: "light"}
      default:
        return state;
  }
}

export const initialState = {
  theme: "light", 
  api: [],
  favs: []
}


export const ContextProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const localFavs = localStorage.getItem('localFavs'); //Guarda en una constante el valor del localStorage (Si existe)
  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const navigate = useNavigate();

  
  console.log(state);

  useEffect(()=>{
    localFavs ? dispatch({ type: "LOCALSTORAGE", payload: JSON.parse(localFavs)}) : localStorage.setItem('localFavs', '[]'); //Si existe el localStoge lo asigna a al state, sino, crea el localstorage []
    setLoading(true);
    const fetchtData = async () => {
      try{
        const dentistGet = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
        dispatch({ type: "API_RESPONSE", payload: dentistGet.data})
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/error")
      }
    }
    fetchtData();
  },[]);

  return (
    <ContextGlobal.Provider value={{loading, state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistStates = () => useContext(ContextGlobal);