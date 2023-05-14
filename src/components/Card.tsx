import {useState} from 'react';
import "./Card.css";

function Card() {
    const [isShowing, setIsShowing] = useState(false);
    const handleShow = () => setIsShowing(!isShowing)

  return (
    <div className={`card-container ${isShowing && 'card-showed'}`}  onClick={handleShow}>{isShowing ? 'Name' : 'Card'}</div>
  )
}

export default Card