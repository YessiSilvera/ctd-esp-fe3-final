import React from "react";
import doctor from "/images/doctor.jpg"
import { Link, useNavigate } from "react-router-dom";
import {useDentistStates} from '../Components/utils/global.context'


const Card = ({ dentist, deletable }) => {

  const {state, dispatch} = useDentistStates();

  const navigate = useNavigate();

  const verifyDuplication = (localFavs, id)=>{
    return localFavs.some(savedDentist => savedDentist.id == dentist.id);
  }


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage✅
    const {id, name, website} = dentist;
    const newDentist = {id, name, website}; //Crea un objeto con los datos del dentista
    const localFavs = JSON.parse(localStorage.getItem('localFavs')); //trae el array guardado en el localStorage para agregar el nuevo elemento

    if(verifyDuplication(localFavs, dentist.id)){ //Verifica si ya existe el destista en localStorage.
      alert('This dentist is already a favorite')
    }else{
      localFavs.push(newDentist); 
      localStorage.setItem('localFavs', JSON.stringify(localFavs))
      dispatch({type:"ADD_DENTIS", payload: newDentist})
      alert('Dentist added to favorites')
    }
                        
  }

  const delFav = ()=>{
    const localFavs = JSON.parse(localStorage.getItem('localFavs'));
    const newList = localFavs.filter((savedDentist) => savedDentist.id != dentist.id)
    localStorage.setItem('localFavs', JSON.stringify(newList))
    dispatch({type:"DEL_DENTIST", payload: dentist.id})
  }

  return (
    <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id ✅*/}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle ✅*/}
        <img src={doctor} alt="" />
        <Link to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
        <p>ID: {dentist.id} / User: {dentist.username}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {deletable ? (<button onClick={delFav} className="favButton">Delete fav</button>) 
        : (<button onClick={addFav} className="favButton">Add fav</button>) 
        }
    </div>
  );
};

export default Card;