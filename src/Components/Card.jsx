import React, { useState, useEffect } from "react";
import doctor from "/images/doctor.jpg";
import { Link } from "react-router-dom";
import { useDentistStates } from '../Components/utils/global.context';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = ({ dentist, deletable }) => {
  const { dispatch } = useDentistStates();

  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const localFavs = JSON.parse(localStorage.getItem('localFavs')) || [];
    if (localFavs.some(savedDentist => savedDentist.id === dentist.id)) {
      setIsFavorited(true);
    }
  }, [dentist.id]);

  const addFav = () => {
    const { id, name, website } = dentist;
    const newDentist = { id, name, website };
    const localFavs = JSON.parse(localStorage.getItem('localFavs')) || [];

    if (!localFavs.some(savedDentist => savedDentist.id === dentist.id)) {
      localFavs.push(newDentist);
      localStorage.setItem('localFavs', JSON.stringify(localFavs));
      dispatch({ type: "ADD_DENTIS", payload: newDentist });
      setIsFavorited(true);
    } else {
      alert('This dentist is already a favorite');
    }
  };

  const delFav = () => {
    const localFavs = JSON.parse(localStorage.getItem('localFavs'));
    const newList = localFavs.filter((savedDentist) => savedDentist.id !== dentist.id);
    localStorage.setItem('localFavs', JSON.stringify(newList));
    dispatch({ type: "DEL_DENTIST", payload: dentist.id });
    setIsFavorited(false);
  };

  return (
    <div className="card">
      <img src={doctor} alt="" />
      <h3>{dentist.name}</h3> {/* Ahora solo muestra el nombre sin enlace */}
      <p>{dentist.username}</p>

      {/* Añadir el nuevo enlace "View Details" */}
      <Link to={`/dentist/${dentist.id}`}>View Details</Link>

      {deletable ? (
        <button onClick={delFav} className="favButton">
          Delete fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          <i
            className="fas fa-star"
            style={{ color: isFavorited ? 'yellow' : 'gray' }}
          ></i>
        </button>
      )}
    </div>
  );
};

export default Card;
