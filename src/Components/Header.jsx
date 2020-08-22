import React from 'react';

function Header(props) {
   if (props.data) {
      var companyName = props.data.companyName;
      var slogan = props.data.slogan;
      var networks = props.data.social.map(function (network) {
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
   }

   return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">Sobre</a></li>
               <li><a className="smoothscroll" href="#ourteam">Nossa Equipe</a></li>
               <li><a className="smoothscroll" href="#portfolio">Trabalhos realizados</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               <li><a className="smoothscroll" href="#contact">Contato</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{companyName}</h1>
               {/* <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3> */}
               <h3>{slogan}</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
   );
}

export default Header;
