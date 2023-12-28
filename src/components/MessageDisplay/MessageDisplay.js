import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MessageDisplay.css';





const MessageDisplay = (props) => {
 
  return (
      <>
          <div className="MessageDisplay">
             {props.message.map((elt) => (
                <div className='carré' key={elt} style={{backgroundColor:elt, width:'100px', height:'100px'}}></div>
             ))
             }
          </div>
      </>
  );
};

MessageDisplay.propTypes = {};

MessageDisplay.defaultProps = {};

export default MessageDisplay;
