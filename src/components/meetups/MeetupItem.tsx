import React, { useContext, useEffect, useState } from 'react';

import { Card } from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import { Meetup } from '../../interfaces/Meetup.interface';

interface Props extends Meetup {}




export const MeetupItem:React.FC<Props> = (props) => {
  const favoriteCntxt = useContext(FavoritesContext);
  const [itemIsFavorite, setItemIsFavorite] = useState(false);

  useEffect(() => {
    if (props.id) setItemIsFavorite(favoriteCntxt.itemIsFavorite(props.id));
  }, [favoriteCntxt, props.id]);

  const toggleFavoriteStatusHandler = () => {
    (itemIsFavorite && props.id) ? favoriteCntxt.removeFavorite(props.id) : 
    favoriteCntxt.addFavorite({
      id: props.id,
      title: props.title,
      description: props.description,
      image: props.image,
      address: props.address
    })
    setItemIsFavorite(!itemIsFavorite);
  }

  return (
    <Card>
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Eliminar de favoritos' : 'Añadir a favoritos'}</button>
        </div>
    </li>
    </Card>
  )
}
