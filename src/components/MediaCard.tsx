/* eslint-disable array-callback-return */
import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Switches from './Switches.tsx';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useContext } from 'react';
import { DataContext } from '../App.tsx';

const useStyles = makeStyles({
  root: {
    width: 375,
    margin:5
  },
  
  media: {
    height: 140,
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const citys: { id: number; img: string; city: string; description:string; people: string;  hotelCount: number,
    revenues: string;surface: string;}[] = useContext(DataContext);


  return (
    <div className="cardsContainer">
      { citys.map((city: { id: number; img: string; city: string; description:string; people: string;  hotelCount: number,
      revenues: string;surface: string;}) => (
        <Card key={city.id} className="cardsItems">
          <CardActionArea>
            <CardMedia
              className={classes.media} 
              image={city.img}
              title={city.city}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {city.city}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {city.description}
              </Typography>
              <Switches/>
              <Divider className='dividerWidth'/>
              <div className='fourColumns'>
                <List>
                  <ListItem>
                    <ListItemText primary={city.people} secondary="Habitants" />
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemText primary={city.hotelCount} secondary="Hotels" />
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemText primary={city.revenues} secondary="Revenu Moy" />
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemText primary={city.surface} secondary="km" />
                  </ListItem>
                </List>
                </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>  
  );
}
