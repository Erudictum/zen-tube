import { useState, useContext } from "react";
import { SearchContextProvider } from "../contexts/SearchContext";
import './listVideos.css';
import './cardVideo.css';


export const CardVideo = ({ item, title, channel, url, description }) => {

    const { setClickedVideo } = useContext(SearchContextProvider);
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
        setTimeout(() => setShowModal(false), 4000);
    }

    const handleClick = () => {
        setClickedVideo({ url: url, title: title, description: description })
    }

    return (
        <div className="list-video-wrapper">
            <div className="img-wrapper">
                <a href="#anchor">
                    <img
                        onClick={() => handleClick()}
                        src={item.snippet.thumbnails.high.url}
                        alt="Imagem da miniatura do vídeo."
                        className="list-video"
                    />
                </a>
            </div>
            <div className="info-btn" onClick={() => handleModal()}>...</div>
            {
                showModal &&
                <div className="info-modal" onClick={() => handleClick()}>
                    <a href="#anchor">
                        <h1>{title}</h1>
                        <h2>{channel}</h2>
                    </a>
                </div>
            }
        </div >
    )
}