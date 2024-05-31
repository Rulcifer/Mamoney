import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ModalAdd extends React.Component {
    constructor() {
      super();
  
      this.state = {
        show : false,
        description : '',
        nominal : 0,
        date: '',
        category : '',
      }
  
      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.addItem = this.addItem.bind(this);
    }
  
    handleClose() {
      this.setState({
        show : false
      })
    }
  
    handleShow() {
      this.setState({
        show : true,
        category : this.props.category
      })
    }
  
    handleChange(evt) {
      this.setState ({
          [evt.target.name] : evt.target.value
      })
    }
  
    addItem() {
      const Data = {
        description : this.state.description,
        nominal : parseInt(this.state.nominal),
        date : this.state.date,
        category : this.state.category,
      }
      const fnAddItem = this.props.action;
      fnAddItem(Data);
      this.setState({
        show : false
      })
    }
  
    render() {
      return (
        <>
          <button onClick={this.handleShow} className={this.props.variant}>{this.props.text} <i className={this.props.icon}></i></button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.modalheader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input 
                  type="text"
                  className="form-control" 
                  placeholder="Input Description" 
                  name="description" 
                  value={this.state.description}
                  onChange={this.handleChange}
                  />
              </div>
  
              <div className="mb-3">
                  <label className="form-label">Nominal</label>
                  <input 
                  type="number"
                  className="form-control" 
                  placeholder="Input Nominal" 
                  name="nominal" 
                  value={this.state.nominal}
                  onChange={this.handleChange}
                  />
              </div>
  
              <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input 
                  type="date"
                  className="form-control" 
                  placeholder="Input Date" 
                  name="date" 
                  value={this.state.date}
                  onChange={this.handleChange}
                  />
              </div>
  
              <div>
                  <input 
                  type="hidden"
                  className="form-control" 
                  placeholder="Input Category" 
                  name="category" 
                  value={this.state.category}
                  onChange={this.handleChange}
                  />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className={this.props.variant} onClick={this.addItem}>
                Save
              </button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  export default ModalAdd;