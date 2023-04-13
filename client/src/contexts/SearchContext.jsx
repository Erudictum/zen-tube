import { createContext, useState } from "react";


export const SearchContextProvider = createContext();

export const SearchProvider = ({ children }) => {
    const [listVideos, setListVideos] = useState([])
    const [clickedVideo, setClickedVideo] = useState('')

    return (
        <SearchContextProvider.Provider value={{
            listVideos,
            setListVideos,
            clickedVideo,
            setClickedVideo
        }}>
            {children}
        </SearchContextProvider.Provider>
    )
}