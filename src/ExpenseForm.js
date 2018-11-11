import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';
import MaterialForm from './MaterialForm'
import { List, ListItem } from '@material-ui/core';
import ToolForm from './ToolForm';

const styles = theme => ({
  root:{
      padding: '10px',
      margin: '5px'
  }
});

class ExpenseForm extends React.Component {

    state = {
        tipo: '',
        descripcion: '',
        costo: '',
        materiales: [],
        herramientas: []
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleMaterialSubmit = mat => {
        this.setState(prevState => {
            return ({
                materiales: [...prevState.materiales, mat]
            })
        })
    }
    handleToolSubmit = t => {
        this.setState(prevState => {
            return ({
                herramientas: [...prevState.herramientas, t.herramienta]
            })
        })
    }
    handleClick = () => {
        this.props.onSubmit(this.state);
        this.setState({
            tipo: '',
            descripcion: '',
            costo: '',
            materiales: [],
            herramientas: []
        });
    }

    render(){
        const { classes, onSubmit } = this.props;
        const { tipo, descripcion, costo, materiales, herramientas } = this.state;
        return (
            <Card className={classes.root}>
                <Typography>Agregar Costo: </Typography>
                <FormGroup row>
                    <TextField
                        value={tipo}
                        placeholder='Tipo'
                        onChange={this.handleChange('tipo')}
                    />
                    <TextField
                        value={descripcion}
                        placeholder='Descripcion'
                        onChange={this.handleChange('descripcion')}
                    />
                    <TextField
                        value={costo}
                        placeholder='Costo'
                        onChange={this.handleChange('costo')}
                    />
                    
                    <Button 
                        variant="fab"
                        color="secondary"
                        aria-label="Add"
                        className={classes.button}
                        onClick={this.handleClick}    
                    >
                        <AddIcon/>
                    </Button>
                </FormGroup>

                <MaterialForm onSubmit={this.handleMaterialSubmit}/>
                <ToolForm onSubmit={this.handleToolSubmit}/>
                <Typography>Materiales Agregados:</Typography>
                <List>
                    {materiales.map(m => <ListItem>Material: {m.material}, Cantidad: {m.cantidad}</ListItem>)}
                </List>
                <Typography>Herramientas Agregadas:</Typography>
                <List>
                    {herramientas.map(h => <ListItem>Herramienta: {h}</ListItem>)}
                </List>
            </Card>
        );
    }
  
}

ExpenseForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ExpenseForm);

