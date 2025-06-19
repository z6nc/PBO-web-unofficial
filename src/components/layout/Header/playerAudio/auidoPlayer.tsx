import { useAudioPlayer } from "../../../../hooks/useAuidoPlayer";
import { ButtomCustom } from "../../../common";
import { HostProfile } from "./HostProfile";
import { PlayIcon, MuteIcon, PauseIcon, VolumenIcon } from "../../../icons/auidoPlayerIcon";
import { useProgramas } from "../../../../hooks/useProgramas";
export const AudioPlayer = () => {
    const { audioRef, togglePlay, toggleMute, isPlaying, isMuted, volume } = useAudioPlayer()
    const currentProgram= useProgramas();
    return (
        <div className="w-full  flex flex-col lg:flex-row    items-center  gap-9 bg-transparent border backdrop-blur-lg rounded-lg text-white p-4   md:max-w-xl  ">
            <audio ref={audioRef} src="http://stream.radiojar.com/2fse67zuv8hvv" preload="auto" />
            <ButtomCustom onclick={togglePlay} estilo="w-20 h-20 lg:w-20 lg:h-20  flex  items-center justify-center bg-white  p-2  rounded-full   hover:scale-105 transition cursor-pointer">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </ButtomCustom>
            <HostProfile ActualPrograma={currentProgram} />
            <ButtomCustom onclick={toggleMute} estilo="text-gray-300 hover:text-white cursor-pointer">
                {isMuted || volume === 0 ? <MuteIcon /> : <VolumenIcon />}
            </ButtomCustom>

        </div>
    );
};


