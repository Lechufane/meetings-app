import React, { useContext, ReactNode } from "react"
import { Link } from "react-router-dom"
import classes from './MainNav.module.css'
import FavoritesContext from "../../store/favorites-context"


interface Props {}

export const MainNav:React.FC<Props> = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
    <div className={classes.logo}>
    React Meetups
    </div>
    <nav>
        <ul>
            <li>
                <Link to="/">All Meetups</Link>
            </li>
            <li>
                <Link to="/new-meetup">Add New Meetup</Link>
            </li>
            <li>
                <Link to="/favorites">My Favorites 
                <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                </Link>
            </li>   
        </ul>
    </nav>

    </header>
  )
}
