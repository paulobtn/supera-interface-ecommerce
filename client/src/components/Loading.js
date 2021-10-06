import "./styles/Loading.css";
import ReactLoading from 'react-loading';


const Loading = () => {
  return (

    <div className="loading">
      <ReactLoading type="spin" color="#dedede" height={'7%'} width={'7%'} />
    </div>
  )
}

export default Loading;
