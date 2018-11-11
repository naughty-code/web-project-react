import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Done, Clear } from '@material-ui/icons'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Expense = ({tipo, descripcion, costo, materiales, herramientas, classes}) => (
    <React.Fragment>
        <b>Tipo: </b> {tipo}
        <p><b>Descripción:</b> {descripcion}</p>
        <b>Costo: </b> {costo}
        <b>Materiales: </b>
        <List >
            {materiales.map((m, i) => <ListItem divider={i+1 !== materiales.length}><ListItemText>{m.nombre} (cantidad: {m.cantidad})</ListItemText></ListItem>)}
        </List>
        <b>Herramientas: </b>
        <List>
            {herramientas.map((h,i) => <ListItem divider={i+1 !== herramientas.length}><ListItemText>{h}</ListItemText></ListItem>)}
        </List>
    </React.Fragment>

)

function Invoice(props) {
  const { cliente, gastos, impresa, classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {cliente.nombre}
        </Typography>
        <Typography component="p">
          <b>Gastos:</b>
          <List>
              {gastos.map((g, i) =><ListItem divider={i+1 !== gastos.length}><Expense {...g}></Expense></ListItem>)}
          </List>
        </Typography>
        <Typography component="p">
          <b>Impresa: </b>{impresa ? <Done/> : <Clear/>}
        </Typography>

      </CardContent>
    </Card>
  );
}

Invoice.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Invoice);