import { useSharedValue, withTiming, } from "react-native-reanimated";
import { Dimensions, ScrollView, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
var SCREEN_HEIGHT = Dimensions.get("window").height;
var splitIntoSentences = function (text) {
    return text.split(/(?<=[.!?])\s+/).filter(Boolean);
};
export function LyricsDisplay(_a) {
    var lyrics = _a.lyrics, _b = _a.speed, speed = _b === void 0 ? 300 : _b, style = _a.style;
    var scrollViewRef = useRef(null);
    var _c = useState(0), activeSentenceIndex = _c[0], setActiveSentenceIndex = _c[1];
    var sentences = splitIntoSentences(lyrics);
    var opacity = useSharedValue(1);
    var getDisplayTime = function (sentence) {
        var words = sentence.split(" ").length;
        return Math.max(1500, (words / speed) * 30 * 1000);
    };
    useEffect(function () {
        var timeoutId;
        var animateNextSentence = function () {
            var displayTime = getDisplayTime(sentences[activeSentenceIndex]);
            opacity.value = withTiming(1, { duration: 150 });
            timeoutId = setTimeout(function () {
                var _a;
                setActiveSentenceIndex(function (prev) { return (prev + 1) % sentences.length; });
                (_a = scrollViewRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                    y: activeSentenceIndex * 50 - SCREEN_HEIGHT * 0.3,
                    animated: true,
                });
            }, displayTime);
        };
        animateNextSentence();
        return function () { return clearTimeout(timeoutId); };
    }, [activeSentenceIndex, sentences, speed]);
    return (<View style={[{ height: SCREEN_HEIGHT * 0.6, justifyContent: "center" }, style]}>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} scrollEnabled={false}>
        {sentences.map(function (sentence, index) { return (<Text key={index} style={{
                fontSize: 24,
                textAlign: "center",
                fontWeight: index === activeSentenceIndex ? "bold" : "normal",
            }}>
            {sentence}
          </Text>); })}
      </ScrollView>
    </View>);
}
export default LyricsDisplay;
