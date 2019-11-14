import React from "react";
import "./style/Contact.scss";
import Popup from "reactjs-popup";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    // Value allocation displayed basic ********
    this.state = {
      input: "",
      select: "object",
      textarea: ""
    };
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
            value={this.state.input}
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
            placeholder="Your e-mail address...."
            id="email"
          />

          <select
            value={this.state.select}
            onChange={event => {
              this.setState({ select: event.target.value });
            }}
            id="select"
          >
            <option value="object" id="object">
              Your Object ?
            </option>
            <option value="feedback">FeedBack</option>
            <option value="question">Questions</option>
            <option value="bugQuestion">Bug</option>
          </select>
        </div>

        <textarea
          type="text"
          value={this.state.textarea}
          onChange={event => {
            this.setState({ textarea: event.target.value });
          }}
          placeholder="Your message...."
          id="message"
        />

        <Popup
          trigger={
            <div id="sendButton">
              <img src="send_button.png" alt="sendButton" />
            </div>
          }
          modal
        >
          {close => (
            <div id="modalContact">
              <div id="closeModalSend" onClick={close}>
                x
              </div>
              <div id="contentContact">
                <div id="closeModal" onClick={close}></div>
                <span>Your e-mail has been sent with success!</span>
              </div>
            </div>
          )}
        </Popup>
      </form>
    );
  }
}

export default Contact;
