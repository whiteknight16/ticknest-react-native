import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus.jsx';
import Timer from './src/features/Timer.jsx';
import { useState } from 'react';
import FocusHistory from "./src/features/FocusHistory.jsx"
export default function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [history,setHistory]=useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentItem ? (
        <>
        <Focus addItem={setCurrentItem} />
      <FocusHistory history={history}/>
        
        </>
      ) : (
        <Timer
          focusItem={currentItem}
          onTimerEnd={(item) => {setHistory([...history,item])}}
          clearSubject={() => {
            setCurrentItem(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.blue,
  },
});
