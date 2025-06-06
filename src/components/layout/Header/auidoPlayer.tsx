import { useAudioPlayer } from "../../../hooks/useAuidoPlayer";
import { ButtomCustom } from "../../common";
import { PlayIcon, MuteIcon, PauseIcon, VolumenIcon } from "../../icons/auidoPlayerIcon";
export const AudioPlayer = () => {
    const { audioRef, togglePlay, toggleMute, isPlaying, isMuted, volume } = useAudioPlayer()

    return (
        <div className="w-full  flex flex-col lg:flex-row    items-center  gap-9 bg-transparent border backdrop-blur-lg rounded-lg text-white p-4   md:max-w-xl  ">
            <audio ref={audioRef} src="http://stream.radiojar.com/2fse67zuv8hvv" preload="auto" />
            <ButtomCustom onclick={togglePlay} estilo="w-20 h-20 lg:w-18 lg:h-18  flex  items-center justify-center bg-white  p-2  rounded-full   hover:scale-105 transition cursor-pointer">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </ButtomCustom>
            <div className="flex flex-1 items-center gap-4  ">
                <div className=" w-12  lg:w-16 rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg  " src="https://pbo.pe/wp-content/uploads/2018/01/marisjoo-760x741.png" alt="" />
                </div>
                <div className="flex flex-col text-start">
                    <span className="font-semibold">PBO Marycarmen Sjoo</span>
                    <span className="text-sm">Escuchando en vivo</span>
                </div>

            </div>

            <ButtomCustom onclick={toggleMute} estilo="text-gray-300 hover:text-white cursor-pointer">
                {isMuted || volume === 0 ? <MuteIcon /> : <VolumenIcon />}
            </ButtomCustom>

        </div>
    );
};


