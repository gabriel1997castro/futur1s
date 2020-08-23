import React, { Component } from 'react';

function OurTeam(props) {
  if (props.data) {
    var skillmessage = props.data.skillmessage;
    var devs = props.data.devs.map(function (dev) {
      return (
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>{dev.name}</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key={dev.job}><h3>{dev.job}</h3>
                  <p className="info">{dev.degree} <span>&bull;</span><em className="date">{dev.graduated}</em></p>
                  <p>{dev.description}</p></div>
              </div>
            </div>
          </div>
        </div>

      )
    })

    var skills = props.data.skills.map(function (skills) {
      var className = 'bar-expand ' + skills.name.toLowerCase();
      return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
    })
  }

  return (
    <section id="ourteam">
      {devs}

      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Habilidades</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}
          </p>

          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

}

export default OurTeam;
