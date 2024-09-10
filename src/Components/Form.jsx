import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones✅
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validInfo, setValidInfo] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  
  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  const handleSubmit = (e) => {

    e.preventDefault();
    name.length > 5 && emailValidation(email) ? setValidInfo(true) : setValidInfo(false);
    setShowMessage(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={handleNameInput}/>
        <input type="email" placeholder="Email" onChange={handleEmailInput}/>
        <textarea name="" id="" placeholder="Write your message here"></textarea>
        <button type="submit">Enviar</button>
      </form>

      {showMessage && (validInfo ? <p>Enviado</p> : <p>Por favor verifique su información nuevamente</p>)}
    </div>
  );
};

export default Form;