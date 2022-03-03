import React from 'react';
import Switch from '@material-ui/core/Switch';
import '../App.css';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
    palette: {
      secondary: {
        main: '#11cb5f',
      },
    },
  });

export default function Switches() {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
        <ThemeProvider theme={theme}>
            <Switch
                className="switchBtn"
                checked={state.checked}
                onChange={handleChange}
                color="secondary"
                name="checked"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </ThemeProvider>
    </div>
  );
}
