import {toBRL} from './helpers'

/* renderiza o frete, se ele for isento, o renderiza cortado */
const Shipping = ({value, freeShipping}) => {

  if(!freeShipping){
    return <span>{toBRL(value)}</span>
  }
  return <span className="cut-through">{toBRL(value)}</span>
}

export default Shipping;
