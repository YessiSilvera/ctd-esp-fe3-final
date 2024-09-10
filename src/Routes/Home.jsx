import React from 'react'
import Card from '../Components/Card'
import {useDentistStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {loading, state} = useDentistStates();

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
          {!loading ? (
            state.api.map((dentist) => (
              // <Card id={dentist.id} name={dentist.name} username={dentist.username} key={dentist.id}/>
              <Card dentist={dentist} key={dentist.id}/>
          ))) : <h2>Cargando...</h2>}
        
      </div>
    </main>
  )
}

export default Home