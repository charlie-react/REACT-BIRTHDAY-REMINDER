import React from "react";

const Individual = ({ id, img, age, name }) => {
  return (
    <>
     
      <section className="flex">
        <img className="ima" src={img} />
        <div>
          <h2 className="center">{name}</h2>
          <p>{age}</p>
        </div>
      </section>
    </>
  );
};

export default Individual;
