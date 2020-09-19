import React from "react";
import "./style.css";

const PersonInfo = (props) => {
  const { person } = props;
  const favMovies = person.favoriteMovies.map((el, i) => {
      return (
          <div className="movie" key={i}>
              {i+1}. {el}
          </div>
      )
  })
  return (
    <section className="info-container">
      <h3 id="person-name">{`${person.name["first"]} ${person.name["last"]}`}</h3>
      <div className="info">
        <strong>From:</strong>
        { ` ${person.city}, ${person.country}` }
      </div>
      <div className="info">
        <strong>Job Title:</strong>
        { ` ${person.title}` }
      </div>
      <div className="info">
        <strong>Employer:</strong>
        { ` ${person.employer}` }
      </div>
      <div className="info">
        <strong>Favorite Movies:</strong>
        { favMovies }
      </div>
    </section>
  );
};

export default PersonInfo;
