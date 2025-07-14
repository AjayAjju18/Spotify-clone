import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";

function Display() {
    const { albumsData } = useContext(PlayerContext);
    const displayRef = useRef();
    const location = useLocation();

    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split('/').pop() : "";

    const currentAlbum = isAlbum && albumsData.length > 0
        ? albumsData.find((album) => album._id === albumId)
        : null;

    const bgColor = currentAlbum?.bgColour || "#121212";

    useEffect(() => {
        displayRef.current.style.background = isAlbum
            ? `linear-gradient(${bgColor}, #121212)`
            : "#121212";
    }, [isAlbum, bgColor]);

    return (
        <div
            ref={displayRef}
            className="w-full px-4 py-4 lg:px-6 rounded text-white lg:w-[75%] lg:ml-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        >
            {albumsData.length > 0 && (
                <Routes>
                    <Route path="/" element={<DisplayHome />} />
                    <Route
                        path="/album/:id"
                        element={<DisplayAlbum album={currentAlbum} />}
                    />
                </Routes>
            )}
        </div>
    );
}

export default Display;
