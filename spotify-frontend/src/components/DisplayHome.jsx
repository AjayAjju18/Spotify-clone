import { useContext } from "react";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import SongsItem from "./SongsItem";
import { PlayerContext } from './../context/PlayerContext';

function DisplayHome() {
    const { songsData, albumsData } = useContext(PlayerContext);

    return (
        <>
            <Navbar />
            <main className="p-4 md:p-8 bg-[#0e0e0e] text-white min-h-full">
                {/* Featured Charts */}
                <section className="mb-12">
                    <h1 className="mb-5 text-3xl font-extrabold tracking-tight">🎵 Featured Charts</h1>
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                        {albumsData.map((item, index) => (
                            <AlbumItem
                                key={index}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                                id={item._id}
                            />
                        ))}
                    </div>
                </section>

                {/* Today's Hits */}
                <section>
                    <h1 className="mb-5 text-3xl font-extrabold tracking-tight">🔥 Today's Biggest Hits</h1>
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                        {songsData.map((item, index) => (
                            <SongsItem
                                key={index}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                                id={item._id}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default DisplayHome;
