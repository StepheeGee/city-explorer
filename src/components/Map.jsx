import {When} from 'react-if';


const API_KEY = import.meta.env.VITE_API_KEY;



function Map(props) {



  return (
    <When condition={props.latitude && props.longitude}>
      <figure >
        <img className="map" src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=600x600&format=png`} width="600" height="600"/>
      </figure>
   
    </When>
  )
}

export default Map;

