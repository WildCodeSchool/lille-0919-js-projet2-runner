import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    // Value allocation displayed basic ********
    this.state = { input: "" };
    this.state = { select: "object" };
    this.state = { textarea: "" };

    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  // function to display the user input in textarea for message *******************
  handleTextarea(event) {
    this.setState({ textarea: event.target.textarea });
  }
  // function to display the user input in input for email ***************
  handleInput(event) {
    this.setState({ value: event.target.value });
  }
  // function to display the user input in select for the purpose of the request ******************
  handleSelect(event) {
    this.setState({ select: event.target.select });
  }

  // function display *********
  render() {
    return (
      <form className="ContactForm">
        <div className="top-form">
          <input
            type="email"
            value={this.state.value}
            onChange={this.handleInput}
            placeholder="Your email adresse...."
            id="email"
          />

          <select
            value={this.state.select}
            onChange={this.handleSelect}
            id="select"
          >
            <option value="object">Your Object ?</option>
            <option value="feedback">FeedBack</option>
            <option value="bugQuestion">Bug/Question</option>
          </select>
        </div>

        <textarea
          type="text"
          value={this.state.textarea}
          onChange={this.handleTextarea}
          placeholder="Your message...."
          id="message"
        />

        <div id="sendButton">
          <img src="send_button.png" alt="sendButton" />
        </div>
      </form>
    );
  }
}

export default Contact;
