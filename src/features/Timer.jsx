import { View, StyleSheet, Text, Vibration } from "react-native";
import { Countdown } from "../components/CountDown.jsx";
import { RoundedButton } from "../components/RoundedButton.jsx";
import { useState } from "react";
import { spacing } from "../utils/size";
import { colors } from "../utils/colors";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import Timing from "./Timing.jsx";
export default function Timer({ focusItem, onTimerEnd, clearSubject }) {
  useKeepAwake();

  const [isStarted, setIsStared] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.05);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStared(false);
    setProgress(1);
    reset();
    onTimerEnd(focusItem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={onEnd}
        />
        <View style={{ padding: spacing.sm }}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusItem != null ? focusItem : ""}</Text>
        </View>
      </View>
      <View style={{ padding: spacing.sm, width: "full" }}>
        <ProgressBar
          progress={progress}
          color={colors.white}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="Start" onPress={() => setIsStared(true)} />
        )}
        {isStarted && (
          <RoundedButton title="Pause" onPress={() => setIsStared(false)} />
        )}
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton
          size={75}
          title="Clear"
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  timingWrapper: {
    flex: 0.1,
    padding: spacing.lg,
    flexDirection: "row",
    flexWrap: "row",
  },
  clearSubjectWrapper: {
    flex: 0.3,
    padding: spacing.xl,
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
