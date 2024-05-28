import './App.css';
import React from 'react';


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
            <span className='title-md'>Sisa uang kamu tersisa 75% lagi</span>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-6'>
            <div className='card-wrapper p-4'>
              <div className='icon-wrapper mb-1'>
                <i class="bi bi-wallet2"></i>
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
                <i class="bi bi-cash"></i>
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
              <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan <i class="bi bi-plus-circle-fill"></i></button>
              <button className='button btn-pink px-3 py-2'>Pengeluaran <i class="bi bi-dash-circle-fill"></i></button>
            </div>
          </div>
        </div>


        <div className='row mt-4'>
          { this.state.summary.map((sum) => {
            return (
          <div className='mb-3 col-12 d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className= {sum.category === 'IN' ? 'icon-wrapper-in' : 'icon-wrapper-out'}>
              <i class={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
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

export default App;
