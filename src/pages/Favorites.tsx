import React, {useContext} from 'react'
import { MeetupList } from '../components/meetups/MeetupList'
import FavoritesContext from '../store/favorites-context'

interface Props {}

export const FavoritesPage:React.FC<Props> = () => {

  const favoritesCtx = useContext(FavoritesContext);

  let content:any;

  favoritesCtx.totalFavorites === 0 ? content = <p>You got no favorites yet. Start adding some?</p> :  content = <MeetupList meetups={favoritesCtx.favorites}/>

  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  )
}
