import './App.css';
import Container from '@material-ui/core/Container';
import MediaCard from './components/MediaCard.tsx';
import { datas , DatasItems } from './data/datas.tsx';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ModalDialog from './components/ModalDialog.tsx';
import React from 'react';
import { useState ,createContext ,useEffect } from "react";

const theme = createTheme({
    palette: {
      secondary: {
        contrastText: '#fff',
        main: '#11cb5f',
      },
    },
  });
 

export const DataContext = createContext(datas);



function App() {
  const [state, setState] = useState({
    datas: datas,
  });
  const localDatasStorage = localStorage.getItem('datas');
  const localDatas = JSON.parse(localDatasStorage);
 
  const handleAddData = (data: { id: number; img: string; city: string; description:string; people: string;  hotelCount: number,
      revenues: string;surface: string;}) => {
    const datas: DatasItems = [...localDatas];
    datas.push(data);

    setState({ datas });
  };

  useEffect(()=>{
    localStorage.setItem('datas', JSON.stringify(state.datas))
  },[state.datas])

 


  return (
    <DataContext.Provider value={state.datas}>
     <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <div className="headerFlex">
            <h1 className='title'>Destinations</h1>
            <p>
              <ModalDialog  onAdd={handleAddData}/>
            </p>
              
          </div>
        <MediaCard/>
        </Container>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;

