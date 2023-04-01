import React from 'react';
import classes from './Card.module.css';

interface Props {
  children: React.ReactNode;
}

export const Card:React.FC<Props> = (props) => {
  return (
    <div className={classes.card}>
        {props.children}
    </div>
  )
}
