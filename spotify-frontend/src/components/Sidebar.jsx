import { useNavigate } from 'react-router-dom';
import { assets } from './../assets/frontend-assets/assets';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="w-[25%] h-full p-3 flex-col gap-3 text-white hidden lg:flex bg-black overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black">
            {/* Top Menu */}
            <div className="bg-[#121212] rounded-lg flex flex-col gap-1 py-3 px-2 shadow-md">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 pl-4 py-2 cursor-pointer hover:bg-[#1a1a1a] transition-all rounded-md"
                >
                    <img className='w-5' src={assets.home_icon} alt="home icon" />
                    <p className='font-semibold text-sm'>Home</p>
                </div>
                <div
                    className="flex items-center gap-3 pl-4 py-2 cursor-pointer hover:bg-[#1a1a1a] transition-all rounded-md"
                >
                    <img className='w-5' src={assets.search_icon} alt="search icon" />
                    <p className='font-semibold text-sm'>Search</p>
                </div>
            </div>

            {/* Your Library */}
            <div className="bg-[#121212] mt-4 rounded-lg shadow-md flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#1f1f1f]">
                    <div className="flex items-center gap-3">
                        <img className='w-6' src={assets.stack_icon} alt="stack_icon" />
                        <p className="font-semibold text-sm">Your Library</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-4 hover:scale-110 cursor-pointer' src={assets.arrow_icon} alt="arrow_icon" />
                        <img className='w-4 hover:scale-110 cursor-pointer' src={assets.plus_icon} alt="plus_icon" />
                    </div>
                </div>

                {/* Create Playlist Box */}
                <div className="bg-[#242424] m-3 p-4 rounded-lg flex flex-col gap-1 text-sm hover:bg-[#2c2c2c] transition-all">
                    <h1 className="font-semibold">Create your first playlist</h1>
                    <p className='text-gray-400 text-xs'>It&apos;s easy, we&apos;ll help you</p>
                    <button className='mt-3 bg-white text-black text-sm px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition-all'>
                        Create Playlist
                    </button>
                </div>

                {/* Podcasts Box */}
                <div className="bg-[#242424] m-3 p-4 rounded-lg flex flex-col gap-1 text-sm hover:bg-[#2c2c2c] transition-all mb-4">
                    <h1 className="font-semibold">Find some podcasts to follow</h1>
                    <p className='text-gray-400 text-xs'>We&apos;ll keep you updated on new episodes</p>
                    <button className='mt-3 bg-white text-black text-sm px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition-all'>
                        Browse Podcasts
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
