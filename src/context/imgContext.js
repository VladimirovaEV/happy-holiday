import { createContext, useContext } from 'react';
import { useImg } from '../hooks/useImg';
import  { holidaysContext } from './holidaysContext';

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
    const {holiday} = useContext(holidaysContext);
    const {urlImg} = useImg(holiday);
    return (
        <imgContext.Provider value={ {urlImg} }>
            { children }
        </imgContext.Provider>
    )
}
