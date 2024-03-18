import { useRef, useState, useEffect } from "react";
import "./AudioPlayer.css";
import { SlVolume2 } from "react-icons/sl";
import { SlVolumeOff } from "react-icons/sl";

const AudioPlayer = ({audioSrc}) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);


    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };
    
    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    return (
        <button onClick={handlePlayPause}>
            <audio ref={audioRef} src={audioSrc} />
            <span className="material-symbols-rounded">
                {isPlaying ? <SlVolumeOff /> : <SlVolume2 />}
            </span>
        </button>
    );
}
export default AudioPlayer;
