import {When} from 'react-if';


const API_KEY = import.meta.env.VITE_API_KEY;



function Map(props) {
console.log(API_KEY);

  console.log(props.latitude)
  console.log(props.longitude)
  return (
    <When condition={props.latitude && props.longitude}>
      <figure>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=600x600&format=png`} width="800" height="800"/>
      </figure>
   
    </When>
  )
}

export default Map;

