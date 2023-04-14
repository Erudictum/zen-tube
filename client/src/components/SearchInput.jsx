import { useState, useContext } from "react";
import { SearchContextProvider } from "../contexts/SearchContext";
import './searchInput.css';
import logo from '../images/logo.png';

export const SearchInput = () => {

    const { setListVideos, setClickedVideo } = useContext(SearchContextProvider);
    const [searchTerm, setSearchTerm] = useState('');
    const [marginDiv, setMarginDiv] = useState('');

    const FETCH_URL = `https://zen-tube.onrender.com?term=${searchTerm}`

    const handleSearch = async (event) => {
        event.preventDefault();
        if (searchTerm === '') return;

        const response = await fetch(FETCH_URL);
        const data = await response.json();

        document.activeElement.blur();

        setListVideos(data.items);
        setMarginDiv("5vh");
        setSearchTerm('');
        setClickedVideo('');
    }

    return (
        <div className="search-wrapper" style={{ marginTop: marginDiv }}>
            <div className="logo-wrapper" onClick={() => location.reload()}>
                <img src={logo} alt="Logo do Zentube." />
            </div>
            <div className="input-wrapper">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        onChange={(event) => setSearchTerm(event.target.value)}
                        spellCheck="false"
                        value={searchTerm}
                        placeholder="Pesquisar..."
                    />
                </form>
                <button onClick={handleSearch} type="submit" aria-label="Botão pesquisar">
                    <i className="fa-solid fa-magnifying-glass icon-glass"></i>
                </button>
            </div>
        </div>
    )
}
