import "./styles/NotFound.css";
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (

    <div className="not-found">
      <div className="not-found__message">
        Não encontrado :(
      </div>
      <Link className="not-found__link link" to={"/"}>Voltar à página inicial</Link>
    </div>
  )
}

export default NotFound;
