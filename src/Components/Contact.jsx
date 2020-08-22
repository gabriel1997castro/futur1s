import React, { Component } from 'react';

function Contact(props) {

    function handleChange() {

    }

    if (props.data) {
        var name = props.data.name;
        var street = props.data.address.street;
        var city = props.data.address.city;
        var state = props.data.address.state;
        var zip = props.data.address.zip;
        var phone = props.data.phone;
        var email = props.data.email;
        var message = props.data.contactmessage;
    }

    return (
        <section id="contact">

            <div className="row section-head">

                <div className="two columns header-col">

                    <h1><span>Fale conosco.</span></h1>

                </div>

                <div className="ten columns">

                    <p className="lead">{message}</p>

                </div>

            </div>

            <div className="row">
                <div className="eight columns">

                    <form action="" method="post" id="contactForm" name="contactForm">
                        <fieldset>

                            <div>
                                <label htmlFor="contactName">Nome <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Assunto</label>
                                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Mensagem <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>

                            <div>
                                <button className="submit">ENVIAR</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> Houve um erro :( </div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Sua mensagem foi enviada! Aguarde contato.<br />
                    </div>
                </div>


                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Address and Phone</h4>
                        <p className="address">
                            {name}<br />
                            {street} <br />
                            {city}, {state} {zip}<br />
                            <span>{phone}</span>
                        </p>
                    </div>

                    <div className="widget widget_tweets">
                        <h4 className="widget-title">Últimas notícias</h4>
                        <ul id="twitter">
                            <li>
                                <span>
                                    Estamos fazendo o site da Ellie Make:
                        Clique no link para ver como o site está: <a href="#">https://elliemakeconsciente.com.br/</a>
                                </span>
                                <b><a href="#">2 Days Ago</a></b>
                            </li>
                            <li>
                                <span>
                                    A Futur1s entrou em parceria com Jubileu da Costa, um visionário na área de tecnologia.
                        Veja mais isso no link: <a href="#">http://t.co/CGIrdxIlI3</a>
                                </span>
                                <b><a href="#">3 Days Ago</a></b>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Contact;
