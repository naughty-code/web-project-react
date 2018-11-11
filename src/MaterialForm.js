import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';

const styles = theme => ({
    root:{
        padding: '10px',
        margin: '5px'
    }
  });

class MaterialForm extends React.Component {

    state = {
        material: '',
        cantidad: ''
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleClick = () => {
        this.props.onSubmit(this.state);
        this.setState({
            material: '',
            cantidad: ''
        });
    }

    render(){
        const {classes, onSubmit} = this.props;
        return (
            <Card className={classes.root}>
            <FormGroup row>
                <TextField
                        value={this.state.material}
                        placeholder='Material'
                        onChange={this.handleChange('material')}
                    />
                <TextField
                        value={this.state.cantidad}
                        placeholder='Cantidad'
                        onChange={this.handleChange('cantidad')}
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
        </Card>
        );
    }
}

MaterialForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(MaterialForm);