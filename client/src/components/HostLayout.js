import React from "react";
import { Link,Outlet } from "react-router-dom";

const Host = () => {
  return (
    <>
    <div className='host-nav'>
      <Link to='/host'>Dashboard</Link>
      <Link to='/host/income'>Income</Link>
      <Link to='/host/reviews'>Reviews</Link>
      </div>
      <Outlet />
      </>
  );
};

export default Host;
