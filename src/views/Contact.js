import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import houseImg from "../imgs/hero-img-1.jpg";


class Contact extends React.Component {
  constructor(props) {
	super(props);
	this.state = { message: '', name: '', email: '', phone:'' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
    <>
    <Navbar/>
    <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${houseImg})` }}
      ></div>
      <div className="flex flex-col pb-16">
     <h1 className="flex flex-col items-center pt-8">Get in touch with us</h1>
     <form className="test-mailing flex flex-col pt-4">
       <div className="flex flex-row">
        <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Your name*"
              required
              onChange  = { (event) => this.handleChange("name", event)}
            />
            <input
              name="email"
              type="email"
              value={this.state.email}
              placeholder="Email Address*"
              required
              onChange  = { (event) => this.handleChange("email", event)}
            />
        </div>
        <div className="flex flex-row">
        <input
              name="phone"
              type="number"
              value={this.state.phone}
              placeholder="Phone number*"
              required
              onChange  = { (event) => this.handleChange("phone", event)}
            />
             <input
              name="subject"
              type="text"
              value={this.state.phone}
              placeholder="Subject*"
              required
              onChange  = { (event) => this.handleChange("phone", event)}
            />
            </div>
        <div className="flex items-center">
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
          onChange  = { (event) => this.handleChange("message", event)}
          placeholder="Your Message*"
        	required
        	value={this.state.feedback}
        	style={{}}
      	/>
        </div>
    	
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
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