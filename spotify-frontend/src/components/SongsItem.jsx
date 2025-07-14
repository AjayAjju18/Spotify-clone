import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function SongsItem({ image, name, desc, id }) {
    const { playWithId } = useContext(PlayerContext);

    return (
        <div
            key={id}
            onClick={() => playWithId(id)}
            className="min-w-[180px] max-w-[180px] p-3 rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition duration-200"
        >
            <img
                className="rounded-md w-full h-[180px] object-cover shadow-md"
                src={image}
                alt="song img"
            />
            <p className="font-bold mt-3 truncate text-white">{name}</p>
            <p className="text-slate-300 text-sm truncate">{desc}</p>
        </div>
    );
}

export default SongsItem;
