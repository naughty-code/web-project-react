import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckBox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';
import ExpenseForm from './ExpenseForm'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const styles = theme => ({
  root:{
      padding: '10px'
  }
});

class InvoiceForm extends React.Component {

    state = {
        nombre: '',
        cedula: '',
        impresa: false,
        gastos: [],
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleExpenseSubmit = expense => {
        this.setState((prevState) => {
            return ({
                gastos: [...prevState.gastos, expense]
            });
        });
    }

    handleClick = () => {
        this.props.onSubmit(this.state);
        this.setState({
            nombre: '',
            cedula: '',
            impresa: false,
            gastos: []
        });
    }

    render(){
        const { classes, onSubmit } = this.props;
        const { nombre, cedula, impresa, gastos } = this.state;
        return (
            <Card className={classes.root}>
                <Typography variant='h5'>Agregar factura: </Typography>
                <FormGroup row>
                    <TextField
                        value={nombre}
                        placeholder='Nombre'
                        className={classes.input}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                        onChange={this.handleChange('nombre')}
                    />
                    <TextField
                        value={cedula}
                        placeholder='Cedula'
                        defaultValue="Cedula"
                        className={classes.input}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                        onChange={this.handleChange('cedula')}
                    />
                    <InputLabel>Impresa:</InputLabel>
                    <CheckBox 
                        value={impresa}
                        onChange={this.handleChange('impresa')}
                    />
                    <Button 
                        variant="fab"
                        color="primary"
                        aria-label="Add"
                        className={classes.button}
                        onClick={this.handleClick}    
                    >
                        <AddIcon />
                    </Button>
                </FormGroup>
                <ExpenseForm onSubmit={this.handleExpenseSubmit}/>
                <List>
                    {gastos.map(g => <ListItem>Gasto por : {g.tipo}</ListItem>)}
                </List>
            </Card>
        );
    }
  
}



InvoiceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InvoiceForm);

