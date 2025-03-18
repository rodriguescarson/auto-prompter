import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Dimensions, ScrollView, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

interface LyricsDisplayProps {
  lyrics: string;
  speed?: number;
  style?: object;
}

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const splitIntoSentences = (text: string): string[] => {
  return text.split(/(?<=[.!?])\s+/).filter(Boolean);
};

export function LyricsDisplay({
  lyrics,
  speed = 300,
  style,
}: LyricsDisplayProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);
  const sentences = splitIntoSentences(lyrics);

  const opacity = useSharedValue(1);

  const getDisplayTime = (sentence: string) => {
    const words = sentence.split(" ").length;
    return Math.max(1500, (words / speed) * 30 * 1000);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const animateNextSentence = () => {
      const displayTime = getDisplayTime(sentences[activeSentenceIndex]);
      opacity.value = withTiming(1, { duration: 150 });

      timeoutId = setTimeout(() => {
        setActiveSentenceIndex((prev) => (prev + 1) % sentences.length);
        scrollViewRef.current?.scrollTo({
          y: activeSentenceIndex * 50 - SCREEN_HEIGHT * 0.3,
          animated: true,
        });
      }, displayTime);
    };

    animateNextSentence();
    return () => clearTimeout(timeoutId);
  }, [activeSentenceIndex, sentences, speed]);

  return (
    <View
      style={[{ height: SCREEN_HEIGHT * 0.6, justifyContent: "center" }, style]}
    >
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        {sentences.map((sentence, index) => (
          <Text
            key={index}
            style={{
              fontSize: 24,
              textAlign: "center",
              fontWeight: index === activeSentenceIndex ? "bold" : "normal",
            }}
          >
            {sentence}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

export default LyricsDisplay;
