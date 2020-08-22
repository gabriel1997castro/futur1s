import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var companyName = this.props.data.companyName;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Imagem da Futuris" />
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
}

export default About;
