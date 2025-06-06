import { useAudioPlayer } from "../../../hooks/useAuidoPlayer";
import { PlayIcon ,MuteIcon,PauseIcon,VolumenIcon } from "../../icons/auidoPlayerIcon";
export const AudioPlayer = () => {
    const { audioRef, togglePlay, handleVolumeChange, toggleMute, isPlaying, isMuted, volume } = useAudioPlayer()

    return (
        <div className="bg-gray-800 text-white p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4 shadow-md max-w-md w-full">
            <div className="flex items-center gap-4">
                <button
                    onClick={togglePlay}
                    className=" cursor-pointer p-2 bg-red-500 rounded-full hover:bg-red-600 transition"
                >
                    {isPlaying ? <PauseIcon/> : <PlayIcon/>}
                </button>

                <audio ref={audioRef} src="http://stream.radiojar.com/2fse67zuv8hvv" preload="auto" />

                <span className="text-sm">Audio</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
                <button onClick={toggleMute} className="text-gray-300 hover:text-white">
                    {isMuted || volume === 0 ? <MuteIcon/> : <VolumenIcon/>}
                </button>

                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-32 sm:w-24 accent-red-500"
                />
            </div>
        </div>
    );
};


