import React from "react";
interface LyricsDisplayProps {
    lyrics: string;
    speed?: number;
    style?: object;
}
export declare function LyricsDisplay({ lyrics, speed, style, }: LyricsDisplayProps): React.JSX.Element;
export default LyricsDisplay;
