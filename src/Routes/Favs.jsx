import React, { useEffect } from "react";
import Card from "../Components/Card";
import {useDentistStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useDentistStates();

  let favorites = JSON.parse(localStorage.getItem('localFavs'));

  useEffect(()=>{
  },[state])

  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage✅*/}
        {/* Deberan renderizar una Card por cada uno de ellos✅*/}
        {favorites.length > 0 ? (
            favorites.map((dentist) => (
              <Card dentist={dentist} key={dentist.id} deletable={true}/>
          ))) : <h2>No has agreago dentistas</h2>}
      </div>
    </div>
  );
};

export default Favs;