import React from 'react'
import { Link } from 'react-router-dom'
import {useDentistStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useDentistStates();

  const handleTheme = (e) => {
    const checked = e.target.checked;
    checked ? dispatch({ type: "THEME_LIGTH"}) : dispatch({ type: "THEME_DARK"});
  }

  return (
    <nav>
     <h1>ColmeClinic</h1>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/contact`}>Contact </Link></li>
        <li><Link to={`/favs`}>Favs</Link></li>
        {/* <li><button onClick={handleTheme}>Change theme</button></li> */}
        <div className = 'toggleSwitch'>
            <label>
                {/* <input type = 'checkbox' onChange={handleTheme} checked={!themeDark}/> */}
                <input type = 'checkbox' onChange={handleTheme} checked={state.theme == "light"}/>
                <span className = 'slider'></span>
            </label>
        </div>
        
      </ul>
    </nav>
 
    
  )
}

export default Navbar