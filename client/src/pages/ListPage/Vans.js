import React from "react";
import Card from "../../components/Card/Card";
import "./vans.css";

export default function Vans() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return data ? (
    <div className='vans'>
      <h2> Explore our van options</h2>
      <div className='filters'>
        <button className='simple'>simple</button>
        <button className="luxury">Luxury</button>
        <button className="rugged">Rugged</button>
        <span className="clear">clear filter</span>
      </div>
      <div className='lists'>
        {data.vans.map((item) => (
          <Card
            img={item.imageUrl}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            type={item.type}
            />
        ))}
      </div>
    </div>
  ) : (
    "Loading..."
  );
}
