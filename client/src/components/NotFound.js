import "./styles/NotFound.css";
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (

    <div className="not-found">
      <div className="not-found__message">
        A página não foi encontrada :(
      </div>
      <Link className="not-found__link" to={"/"}>Voltar à página inicial</Link>
    </div>
  )
}

export default NotFound;
