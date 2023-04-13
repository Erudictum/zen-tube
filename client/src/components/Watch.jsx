import { useContext } from "react"
import { SearchContextProvider } from "../contexts/SearchContext";
import './watch.css'

export const Watch = () => {

    const { clickedVideo } = useContext(SearchContextProvider)

    return (
        <div className="watch-wrapper" id="anchor">
            {clickedVideo &&
                <div className="video-display">
                    <iframe
                        src={`https://www.youtube.com/embed/${clickedVideo?.url}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    >
                    </iframe>
                    <div className="description-wrapper">
                        <h1>{clickedVideo.title}</h1>
                        <details>
                            <summary>Descrição</summary>
                            <div className="description">
                                <p>{clickedVideo.description}</p>
                            </div>
                        </details>
                    </div>
                </div>
            }
        </div>
    )
}