import React from "react";

function Head(props) {
  let buttonText = props.status ? "Log Out" : "Log In";
  return (
    <div>
      {props.status ? (
        <h1 className="navBar">Welcome {props.name}! This is my header!!!</h1>
      ) : (
        <h1>Kindly Login to continue!</h1>
      )}
      <button onClick={() => props.logStatus(props.status)}>
        {buttonText}
      </button>
    </div>
  );
}

export default Head;
