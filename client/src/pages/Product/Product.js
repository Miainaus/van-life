import React from "react";
import "./product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setData(data))
}, [params.id])
 console.log(data)
  return data?<div className="product">
    <img src={data.vans.imageUrl} alt="" />
    <div className="info-container">
    <div className={`tag ${data.vans.type}`}>{data.vans.type}</div>
    <div className="name">{data.vans.name}</div>
    <div className="price">${ data.vans.price}/day</div>
    <div className="desc">{data.vans.description}</div>
    <button>Rent this van</button></div>
  </div>:"Loading...";
};

export default Product;
