import React, { Component } from 'react';
import './App.css';
import invoices from './invoices.json';
import Grid from '@material-ui/core/Grid';
import Invoice from './Invoice';
import InvoiceForm from './InvoiceForm';
import Typography from '@material-ui/core/Typography';


class App extends Component {
  state = {
    invoices: invoices
  };

  handleSubmit = inv => {
    this.setState((prevState) => {
      const newInvoice = {
        cliente: {
          nombre: inv.nombre,
          cedula: inv.cedula
        },
        impresa: inv.impresa,
        gastos: inv.gastos
      };
      return ({
        invoices: [...prevState.invoices, newInvoice]
      })
    })
  }

  render() {
    const {invoices} = this.state;
    return (
      <Grid container alignItems='center' justify='center' direction='column'>
        <Grid item>
          <InvoiceForm onSubmit={this.handleSubmit}/>
         </Grid>
        {invoices.map(i =><Grid item> <Invoice {...i}></Invoice></Grid>)}
      </Grid>
    );
  }
}

export default App;
