import { useContext } from 'react';
import { assets } from './../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function Player() {

    const {
        track, seekBar, seekBg, play, pause, playStatus, time, nextSong, previusSong,
        seekSong, toggleLoop, isLooping, isShuffle, toggleShuffle, volume, handleVolumeChange,
        isMuted, toggleMute
    } = useContext(PlayerContext);

    return track ? (
        <div className="fixed bottom-0 w-full z-50 bg-black text-white px-4 py-2 flex justify-between items-center h-[90px]">
            {/* Track Info */}
            <div className="hidden lg:flex items-center gap-4 w-[20%]">
                <img className="w-14 h-14 rounded object-cover" src={track.image} alt="song" />
                <div>
                    <p className="font-semibold">{track.name}</p>
                    <p className="text-sm text-gray-400">{track.desc.slice(0, 20)}</p>
                </div>
            </div>

            {/* Player Controls */}
            <div className="flex flex-col items-center gap-2 w-[60%]">
                <div className="flex gap-5 items-center">
                    <img onClick={toggleShuffle} className={`w-5 cursor-pointer ${!isShuffle && "opacity-40"}`} src={assets.shuffle_icon} alt="shuffle" />
                    <img onClick={previusSong} className='w-5 cursor-pointer' src={assets.prev_icon} alt="prev" />
                    {!playStatus ? (
                        <img onClick={play} className='w-6 cursor-pointer' src={assets.play_icon} alt="play" />
                    ) : (
                        <img onClick={pause} className='w-6 cursor-pointer' src={assets.pause_icon} alt="pause" />
                    )}
                    <img onClick={nextSong} className='w-5 cursor-pointer' src={assets.next_icon} alt="next" />
                    <img onClick={toggleLoop} className={`w-5 cursor-pointer ${!isLooping && "opacity-40"}`} src={assets.loop_icon} alt="loop" />
                </div>

                <div className="flex items-center gap-3 w-full justify-center">
                    <span className="text-xs w-12 text-right">{time.currentTime.minute}:{time.currentTime.second}</span>
                    <div
                        ref={seekBg}
                        onClick={seekSong}
                        className='w-full max-w-[500px] h-1 bg-gray-500 rounded-full cursor-pointer relative'
                    >
                        <div
                            ref={seekBar}
                            className='h-1 bg-green-500 rounded-full absolute top-0 left-0'
                            style={{ width: `${(time.currentTime.minute * 60 + time.currentTime.second) / (time.totalTime.minute * 60 + time.totalTime.second) * 100 || 0}%` }}
                        />
                    </div>
                    <span className="text-xs w-12">{time.totalTime.minute}:{time.totalTime.second}</span>
                </div>
            </div>

            {/* Volume & Extras */}
            <div className="hidden lg:flex items-center gap-3 w-[20%] justify-end">
                <img className='w-4 opacity-50' src={assets.plays_icon} alt="plays" />
                <img className='w-4 opacity-50' src={assets.mic_icon} alt="mic" />
                <img className='w-4 opacity-50' src={assets.queue_icon} alt="queue" />
                <img className='w-4 opacity-50' src={assets.speaker_icon} alt="speaker" />
                <img
                    onClick={toggleMute}
                    className='w-4 cursor-pointer'
                    src={!isMuted && volume !== 0 ? assets.volume_icon : assets.mute_icon}
                    alt="volume"
                />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="h-1 w-20 bg-gray-300 rounded-lg cursor-pointer"
                />
                <img className='w-4 opacity-50' src={assets.mini_player_icon} alt="mini_player" />
                <img className='w-4 opacity-50' src={assets.zoom_icon} alt="zoom" />
            </div>
        </div>
    ) : null;
}

export default Player;
