import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons';
import '../App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useState } from "react";


const theme = createTheme({
    palette: {
      secondary: {
        main: '#11cb5f',
      },
    },
  });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      width: '25ch',
    },
  }),
);


interface Destinations {
  id: number,
  img: string;
  city: string,
  description: string,
  people: string,
  hotelCount: number,
  revenues: string,
  surface: string,

}

export default function ModalDialog({onAdd}) {
  const [state, setState] = useState({
    checked: false,
  });
  

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange = (prop: keyof Destinations) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Destinations>({
    id: new Date().getTime(),
    img: '',
    city: '',
    description: '',
    people: '',
    hotelCount: null,
    revenues: '',
    surface: '',
  });

  
  const handleAdd = event => {
    event.preventDefault();

    setOpen(false);
    onAdd(values);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained" color="secondary" size="small" startIcon={<Add />} onClick={handleClickOpen}>
            Ajouter
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Ajouter une nouvelle destination</DialogTitle>
            <DialogContent>
            <TextField
                margin="dense"
                id="name"
                label="Nom de la destination"
                variant="filled"
                type="text"
                value={values.city}
                onChange={handleChange('city')}
                fullWidth
            />
             <TextField
                autoFocus
                margin="dense"
                id="adresse"
                label="Adresse"
                variant="filled"
                type="text"
                value={values.description}
                onChange={handleChange('description')}
                fullWidth
            />
             <TextField
                margin="dense"
                id="img"
                label="Lien de l'image"
                variant="filled"
                type="text"
                value={values.img}
                onChange={handleChange('img')}
                fullWidth
            />
            <span className="fourColumns">
               <TextField
                margin="dense"
                id="peoples"
                label="Nb. Habitants"
                variant="filled"
                type="text"
                value={values.people}
                onChange={handleChange('people')}
                
            />
             <TextField
                className={classes.textField}
                margin="dense"
                id="hotel"
                label="Nb. Hotels"
                variant="filled"
                type="text"
                value={values.hotelCount}
                onChange={handleChange('hotelCount')}
                
            />
             <TextField
                className={classes.textField}
                margin="dense"
                id="adresse"
                label="Revenues"
                variant="filled"
                type="text"
                value={values.revenues}
                onChange={handleChange('revenues')}
                
            />
             <TextField
                className={classes.textField}
                margin="dense"
                id="are"
                label="Surface"
                variant="filled"
                type="text"
                value={values.surface}
                onChange={handleChange('surface')}
                
            />
            </span>
            <ThemeProvider theme={theme}>
              <Switch
                  checked={state.checked}
                  onChange={handleChangeSwitch}
                  color="secondary"
                  name="checked"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <span>Activer</span>
            </ThemeProvider>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>
                Cancel
            </Button>
            <Button  color="secondary" onClick={handleAdd} >
                Confirm
            </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}
