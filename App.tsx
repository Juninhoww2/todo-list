import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import doneIcon from './assets/done-icon.png';

export default function App() {
  //const [toDo, setToDo] = useState([]);
  const [isDone, setIsDone] = useState(false);

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function handleCompletedAction() {
    if(isDone) setIsDone(false);
    else setIsDone(true);
  }

  function handleNewAction() {

  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <View style={styles.date}>
          <Text style={styles.dateDay}>07</Text>
          <View style={styles.dateMonthYear}>
            <Text style={styles.dateMonth}>SEP</Text>
            <Text style={styles.dateYear}>2020</Text>
          </View>
        </View>
        <Text style={styles.dateWeek}>Monday</Text>
      </View>

      <View style={styles.body}>
      <View style={styles.toDo}>
          <Text style={styles.toDoTextDone}>Pay bill</Text>
          <TouchableOpacity style={styles.toDoButtonDone} onPress={handleCompletedAction}>
            <Image source={doneIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.toDo}>
          <Text style={[isDone ? styles.toDoText : styles.toDoTextDone ]}>Pay bill</Text>
          <TouchableOpacity style={[isDone ? styles.toDoButton : styles.toDoButtonDone ]} onPress={handleCompletedAction}>
            {!isDone && <Image source={doneIcon}/>}
          </TouchableOpacity>
        </View>
        <View style={styles.toDo}>
          <Text style={styles.toDoText}>Watch a new serie</Text>
          <TouchableOpacity style={styles.toDoButton} onPress={handleCompletedAction}></TouchableOpacity>
        </View>
      </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton} onPress={handleNewAction}>+</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 64,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40
  },
  date: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dateDay: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 56,
    color: "#6A6A6A",
  },
  dateMonth: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 18,
    color: "#6A6A6A",
  },
  dateYear: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 18,
    color: "#6A6A6A",
  },
  dateMonthYear: {
    marginLeft: 10,
  },
  dateWeek: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 18,
    color: "#6A6A6A",
    textTransform: "uppercase",
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  button: {
    marginTop: 20,
    marginBottom: 100,
    backgroundColor: "#50E3A4",
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.15,
  },
  textButton: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 42,
    color: "#39A778",
  },
  toDo: {
    justifyContent: 'space-between',
    alignContent: "center",
    marginBottom: 50,
    width: 300,
    flexDirection: 'row',
  },
  toDoButton: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    borderColor: "#DBDBDB",
    borderWidth: 2,
    backgroundColor: "#FFF",
    flexDirection: 'column',
  },
  toDoButtonDone: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: "#50E3A4",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toDoText: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 24,
    color: "#6A6A6A",
  },
  toDoTextDone: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 24,
    color: "#B6B6B6",
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});
