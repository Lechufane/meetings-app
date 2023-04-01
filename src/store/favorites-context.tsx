import React, { createContext, useState, ReactNode } from "react";
import { Meetup } from "../interfaces/Meetup.interface"


interface FavContextValue {
    favorites: Meetup[];
    totalFavorites: number;
    addFavorite: (favoriteMeetup: Meetup) => void;
    removeFavorite: (meetupId: string) => void;
    itemIsFavorite: (meetupId: string) => boolean;
}

interface Props {
    children: ReactNode;
}




const FavoritesContext = createContext<FavContextValue>({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup: Meetup) => {},
    removeFavorite: (meetupId: string) => {},
    itemIsFavorite: (meetupId: string) => false,
});


export const FavoritesContextProvider = (props: Props) => {

    const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);
    
    const addFavoriteHandler = (favoriteMeetup: Meetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };
    
    const removeFAvoriteHandler = (meetupId:string) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    };
    
    const itemIsFavoriteHandler = (meetupId:string) => {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    };
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFAvoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;
