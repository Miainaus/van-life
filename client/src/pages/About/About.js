import React from "react";
import { Link } from 'react-router-dom';
import './about.css';

export default function About() {
  return (
    <div className='about'>
      <img src='https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80' alt='van' />
      <div className='desc'>
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="vansLink">
          <h3>Your destination is waiting.
            <br/>Your van is ready.</h3>
          <button>
            <Link to='/vans'>Explore our vans</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
