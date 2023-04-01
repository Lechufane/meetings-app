import React, {ReactNode} from 'react';
import classes from './Layout.module.css';
import { MainNav } from './MainNav';

interface Props {
  children: ReactNode;
}

export const Layout = (props:Props) => {
  return (
    <div>
      <MainNav/>
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  )
}