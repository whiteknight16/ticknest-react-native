import React, { useState,useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import {spacing} from "../utils/size"
export default function Focus({addItem}) {
  const [item,setItem]=useState('')
  useEffect(() => {
    if (item.length > 80) {
      alert("Item length can't exceed 80 characters");
    }
  }, [item]);


  const addingItem=()=>{
    if (item.length>80){
      alert("Item length can't exceed 80 characters");
    }
    else {
      addItem(item)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        type="outlined"
          label="What would you like to focus upon..."
          style={styles.textInput}
          value={item}
          onChangeText={(i)=>setItem(i)}
        />

        <View style={styles.button}>
        <Button title="Add" color={colors.amber} onPress={addingItem} ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
  },
  inputContainer: {
    flex: 0.5,
    padding: spacing.lg,
    width: '100%',
  },
  textInput: {
    width: '100%',
  },
  button:{
    marginTop:spacing.sm,


  },
  text: {
    color: colors.white,
  },
});
