import React from "react";
import { Link, useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <div className="error-image">
        <img
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
          alt="Error Image"
        />
      </div>

      <div className="error-details">
        <h1>Oops! Something Went Wrong!!</h1>
        <h3 className="error-data">{err.data}</h3>

        <h3 className="error-back-home">
          <Link className="link-name" to="/">
            Back Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
