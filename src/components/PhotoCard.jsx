import './photocard.css'
import { useState } from 'react'

function PhotoCard(props) {
  let image; 
  let [isSelected, updateImageState] = useState(false);
  const imageResponse = () => {
    updateImageState(isSelected = !isSelected);
  };

  if (isSelected){
    image = <img src={props.image} className="card-image" alt="image" />
  } else {
      image =  <img src={props.image + "?grayscale"} className="card-image" alt="image" />
}

  
  return (
    <div className="image-card" onClick={imageResponse}>
    {image}
    </div>
  )
}


export default PhotoCard
