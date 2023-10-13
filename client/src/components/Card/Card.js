import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

const Card = ({ img,name,price,id,type}) => {
  console.log(img)
  return (
    
    <div className='card'>
      <Link to={`${id}`}>
        <img src={img} alt={name} /></Link>
        <Link to={`${id}`}>
      <div className="info">
        <div className="desc">
        <span className="title">{name}</span>
          <span className="price">${price}/day</span>
        </div>
        <div className={`tag ${type}`}>{type}</div>
      </div></Link>
      
    </div>
  );
}

export default Card;
