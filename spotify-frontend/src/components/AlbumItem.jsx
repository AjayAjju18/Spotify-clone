import { useNavigate } from "react-router-dom";

function AlbumItem({ image, name, desc, id }) {
    const navigate = useNavigate();

    return (
        <div
            key={id}
            onClick={() => navigate(`/album/${id}`)}
            className="min-w-[180px] max-w-[180px] p-3 rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition duration-200"
        >
            <img
                className="rounded-md w-full h-[180px] object-cover shadow-md"
                src={image}
                alt="album img"
            />
            <p className="font-bold mt-3 truncate text-white">{name}</p>
            <p className="text-slate-300 text-sm truncate">{desc}</p>
        </div>
    );
}

export default AlbumItem;
