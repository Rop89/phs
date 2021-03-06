import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import logo from "../imgs/PHS.png";
import contactUsPic from "../imgs/pic-14.jpg";

class Contact extends React.Component {
  constructor(props) {
	super(props);
	this.state = { message: '', name: '', email: '', phone:'', subject:'', country:'' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }
  selectCountry (val) {
    this.setState({ country: val });
  }

  render() {
    const { country } = this.state;
	return (
    <>
     <div className= "navbar flex flex-row justify-between">
      <Navbar />
      <img
          className="logo h-10 w-10 mr-4 md:mr-10 "
          src={logo}
          alt="PHS logo"
        />
        </div>
    <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat md:w-1140px md:block md:ml-auto md:mr-auto h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${contactUsPic})` }}
      ></div> 
      
      <div className="phs-form-div-wrapper-hero bg-slightlyWhiter flex flex-col pb-16 pl-2 pr-2">
     <h1 className="phs-contact-us-title flex flex-col items-center text-2xl pt-8">Get in touch with us</h1>
     <form className="phs-form-wrapper flex flex-col items-center text-sm ml-2 mr-2 pt-10">
       <div className="phs-form-row-1 flex flex-col pt-4">
        <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Your name*"
              required
              onChange  = { (event) => this.handleChange("name", event)}
              className="border-2 border-opacity-25 border-black p-4 w-350px "
            />
            <input
              name="email"
              type="email"
              value={this.state.email}
              placeholder="Email Address*"
              required
              onChange  = { (event) => this.handleChange("email", event)}
              className=" border-2 border-opacity-25 border-black p-4 w-350px mt-6"
            />
        </div>
        <div className="phs-form-row-2 flex flex-col pt-6">
        <input
              name="phone"
              type="number"
              value={this.state.phone}
              placeholder="Phone number*"
              required
              onChange  = { (event) => this.handleChange("phone", event)}
              className="border-2 border-opacity-25 border-black p-4 w-350px"
            />
             <input
              name="subject"
              type="text"
              value={this.state.subject}
              placeholder="Subject*"
              required
              onChange  = { (event) => this.handleChange("subject", event)}
              className=" border-2 border-opacity-25 border-black mt-6 p-4 w-350px"
            />
            </div>
            <div className="phs-country-selector flex flex-row flex-1 mt-6 border-2 bg-blackMild">
            <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)}
            classes='country-dropdown'
            style={{
              color: '#9ca3af',
              fontSize: 14,
              paddingTop: 15,
              paddingBottom:15,
              paddingLeft: 10,
              width: '350px'
          }} />
          </div>
        <div className="phs-form-message flex items-center">
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
          onChange  = { (event) => this.handleChange("message", event)}
          placeholder="Your Message*"
        	required
        	value={this.state.feedback}
          className=" pt-4 pl-2 mt-6 w-350px h-175px border-2 border-opacity-25 border-black"
      	/>
        </div>
    	
    	<input type="button" value="Submit" className="btn btn--submit cursor-pointer rounded-lg w-2/3 mt-12 p-4 bg-blackMild hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-350px" onClick={this.handleSubmit} />
  	</form>
    </div>
    <BottomNav/>
    </>
	)
  }

  handleChange(key,event) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_tjp7pm8';

    this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})

    }
  

    sendFeedback (templateId,variables) {
      init("user_PeoZxfOAhhJdSO76WelQ8"); 
    emailjs.send(
      'service_n0ml5lb',templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  }
export default Contact; 