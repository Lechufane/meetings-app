import React from 'react';
import { MeetupItem } from './MeetupItem';
import classes from './MeetupList.module.css';
import { Meetup } from '../../interfaces/Meetup.interface';

interface Props {
  meetups: Meetup[];
}


export const MeetupList: React.FC<Props> = (props) => {

  return (
    <ul className={classes.list}>
        {props.meetups.map((meetup, i) => {

        return <MeetupItem key={i}
        id={meetup.id}
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
        />
        })}
    </ul>
  )
}
