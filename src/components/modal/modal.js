import React from "react";
import PropTypes from 'prop-types';
import "./modal.css";

class Modal extends React.Component {
    onClose= e=>{
        this.props.onClose && this.props.onClose(e);
    }
    render() {
        if (!this.props.show) {
            return null;
          }
          return (
            <div className="modal" id="modal">
              <div className="content">{this.props.children}</div>
              <div className="actions">
       
                  <i class="fa fa-times" onClick={this.onClose}></i> 
              </div>
            </div>
          );    
    }
  }

export default Modal;
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };