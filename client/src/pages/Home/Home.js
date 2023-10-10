import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className='home'>
      <div className="content">
      <h1>You got travel plans, we got the travel vans.</h1>
      <p>
        Add life adventure to your life by joining the #vanLife movement.
        <br />
        Rent the perfect van to make your life perfect road trip.
      </p>
      <button>
        <Link to='/vans'>Find your van</Link>
      </button>
      </div>
      
    </div>
  );
}
