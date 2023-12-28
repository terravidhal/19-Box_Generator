import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MessageForm.css';




const MessageForm = (props) => {
  const [msg, setMsg] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault();
      // what should we do with the message?
      props.onNewMessage( msg );
      setMsg("");
  };
  
  return (
      <form className='MessageForm' onSubmit={ handleSubmit }>
          <h1>Color</h1>
          <textarea 
              rows="4"
              cols="50"
              placeholder="Enter your message here"
              onChange={ (e) => setMsg(e.target.value.toLowerCase()) }
              value={ msg }
          ></textarea>
          <input type="submit" value="Add" />
      </form>
  );
};

MessageForm.propTypes = {};

MessageForm.defaultProps = {};

export default MessageForm;
