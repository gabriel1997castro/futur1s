import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      siteData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/siteInfo.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({siteData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.siteData.main}/>
        <About data={this.state.siteData.main}/>
        <OurTeam data={this.state.siteData.ourteam}/>
        <Portfolio data={this.state.siteData.portfolio}/>
        <Contact data={this.state.siteData.main}/>
        <Footer data={this.state.siteData.main}/>
      </div>
    );
  }
}

export default App;
