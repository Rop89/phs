import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import houseImg from "../imgs/hero-img-1.jpg";

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
    <Navbar/>
    <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${houseImg})` }}
      ></div> 
      <div className="phs-form-div-wrapper-hero bg-slightlyWhiter flex flex-col pb-16 pl-2 pr-2">
     <h1 className="phs-contact-us-title flex flex-col items-center text-2xl pt-8">Get in touch with us</h1>
     <form className="phs-form-wrapper flex flex-col items-center text-sm">
       <div className="phs-form-row-1 flex flex-row pt-4">
        <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Your name*"
              required
              onChange  = { (event) => this.handleChange("name", event)}
              className=" pl-2 rounded-lg border-2 border-opacity-25 border-black hover:bg-white hover:shadow-lg mr-4 w-2/3 h-10"
            />
            <input
              name="email"
              type="email"
              value={this.state.email}
              placeholder="Email Address*"
              required
              onChange  = { (event) => this.handleChange("email", event)}
              className=" pl-2 rounded-lg border-2 border-opacity-25 border-black hover:bg-white hover:shadow-lg w-2/3 h-10"
            />
        </div>
        <div className="phs-form-row-2 flex flex-row pt-4">
        <input
              name="phone"
              type="number"
              value={this.state.phone}
              placeholder="Phone number*"
              required
              onChange  = { (event) => this.handleChange("phone", event)}
              className=" pl-2 rounded-lg border-2 border-opacity-25 border-black hover:bg-white hover:shadow-lg mr-4 w-2/3 h-10"
            />
             <input
              name="subject"
              type="text"
              value={this.state.subject}
              placeholder="Subject*"
              required
              onChange  = { (event) => this.handleChange("subject", event)}
              className=" pl-2 rounded-lg border-2 border-opacity-25 border-black hover:bg-white hover:shadow-lg hover:border-transparent w-2/3 h-10"
            />
            </div>
            <div className="phs-country-selector flex flex-row flex-1 mt-4 border-2 border-black ">
            <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)}
            classes='country-dropdown'
            style={{
              color: '#9ca3af',
              borderRadius:'50px',
              fontSize: 14,
              paddingLeft: 5,
              width: '100%'
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
          className=" pt-4 pl-2 mt-6 w-350px h-175px rounded-lg border-2 border-opacity-25 border-black"
      	/>
        </div>
    	
    	<input type="button" value="Submit" className="btn btn--submit rounded-lg w-2/3 mt-12 p-4 bg-blackMild hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 " onClick={this.handleSubmit} />
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