import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";


class Contact extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@gmail.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
    <>
    <Navbar/>
      <div className="flex flex-col">
     <h1 className="flex flex-col items-center">Contact us</h1>
     <form className="test-mailing flex flex-col h-screen pt-4">
       <div className="flex flex-row">
        <label htmlFor="email"> Email</label>
        <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
        </div>
        <div className="flex flex-row">
        <label htmlFor="message"> Message</label>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
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

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_tjp7pm8';

    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})

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