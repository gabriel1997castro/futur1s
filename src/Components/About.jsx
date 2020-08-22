import React, { Component } from 'react';

function About(props) {
   if (props.data) {
      var companyName = props.data.companyName;
      var profilepic = "images/" + props.data.image;
      var bio = props.data.bio;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone = props.data.phone;
      var email = props.data.email;
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="Imagem da Futuris" />
            </div>
            <div className="nine columns main-col">
               <h2>Sobre Nós</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Detalhes de contato</h2>
                     <p className="address">
                        <span>{companyName}</span><br />
                        <span>{street}<br />
                           {city} {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  {/* <div className="columns download">
                  <p>
                     <a href={portfolioDownload} className="button"><i className="fa fa-download"></i>Download Portifolio</a> //Aqui pode ter o portifolio em pdf
                  </p>
               </div> */}
               </div>
            </div>
         </div>

      </section>
   );
}

export default About;
