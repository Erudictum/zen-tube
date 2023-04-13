import { useContext } from "react";
import { SearchContextProvider } from "../contexts/SearchContext";
import { CardVideo } from "./CardVideo";
import './listVideos.css'

export const ListVideos = () => {

    const { listVideos } = useContext(SearchContextProvider)

    return (
        <div className="list-videos-wrapper">
            {
                listVideos?.map((item) =>
                    <CardVideo
                        item={item}
                        key={item.etag}
                        title={item.snippet.title}
                        description={item.snippet.description}
                        channel={item.snippet.channelTitle}
                        url={item.id.videoId}
                    />
                )}
        </div>
    )
}