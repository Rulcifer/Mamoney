import './App.css';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      existingMoney : 0,
      percentMoney : 0,
      income : 0,
      spending : 0,
      transactionIN : 0,
      transactionOUT: 0,
      summary : [
        {
          description : 'Menerima Gaji',
          date : '1 July 2024',
          nominal : '5700000',
          category : 'IN'
        },
        {
          description : 'Makan Harian',
          date : '2 July 2024',
          nominal : '50000',
          category : 'OUT'
        }
      ]
    }
  }


  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='fw-bold'>Uang Rulskuy</h1>
            <hr className='w-75 mx-auto'/>
            <h2 className='fw-bold'>Rp. {this.state.existingMoney}</h2>
            <span className='title-md'>Sisa uang kamu tersisa {this.state.percentMoney}%</span>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-6'>
            <div className='card-wrapper p-4'>
              <div className='icon-wrapper mb-1'>
                <i className="bi bi-wallet2"></i>
              </div>
              <span className='title-sm'>Pemasukan</span>
              <h3 className='fw-bold'>Rp. {this.state.income}</h3>
              <div>
              <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> Transaksi</span>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='card-wrapper p-4'>
              <div className='icon-wrapper mb-1'>
                <i className="bi bi-cash"></i>
              </div>
              <span className='title-sm'>Pengeluaran</span>
              <h3 className='fw-bold'>Rp. {this.state.spending}</h3>
              <div>
              <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> Transaksi</span>
              </div>
            </div>
          </div>

        </div>

        <div className='row mt-5'>
          <div className='col-12 d-flex justify-content-between align-items-center'>
            <h4 className=''>Ringkasan Transaksi</h4>
            <div className='wrapper-button d-flex'>
              <ModalAdd variant="button btn-ungu px-3 py-2 me-2" text="Pemasukan" icon="bi bi-plus-circle-fill" modalheader="Tambahkan jumlah Pemasukan"/>
              <ModalAdd variant="button btn-pink px-3 py-2" text="Pengeluaran" icon="bi bi-dash-circle-fill" modalheader="Tambahkan jumlah Pengeluaran"/>
            </div>
          </div>
        </div>


        <div className='row mt-4'>
          { this.state.summary.map((sum, index) => {
            return (
          <div key={index} className='mb-3 col-12 d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className= {sum.category === 'IN' ? 'icon-wrapper-in' : 'icon-wrapper-out'}>
              <i className={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
              </div>
              <div className='transaksi ms-3 d-flex flex-column'>
                <h6 className=''>{sum.description}</h6>
                <span className='title-sm'>{sum.date}</span>
              </div>
            </div>

            <h5 className={sum.category === 'IN' ? 'text-in-money' : 'text-out-money'}>Rp. {sum.nominal}</h5>
          </div>
            )
          }) }
          
        </div>
      </div>
    )
  }
}

class ModalAdd extends React.Component {
  constructor() {
    super();

    this.state = {
      show : false,
      descriptionModal : '',
      nominalModal : 0,
      dateModal : '',
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.setState({
      show : false
    })
  }

  handleShow() {
    this.setState({
      show : true
    })
  }

  handleChange(evt) {
    this.setState ({
        [evt.target.name] : evt.target.value
    })

    console.log(this.state)
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
                name="descriptionModal" 
                value={this.state.descriptionModal}
                onChange={this.handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nominal</label>
                <input 
                type="number"
                className="form-control" 
                placeholder="Input Nominal" 
                name="nominalModal" 
                value={this.state.nominalModal}
                onChange={this.handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Date</label>
                <input 
                type="date"
                className="form-control" 
                placeholder="Input Date" 
                name="dateModal" 
                value={this.state.dateModal}
                onChange={this.handleChange}
                />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default App;
