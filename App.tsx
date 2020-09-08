import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import doneIcon from "./assets/done-icon.png";
import Modal from 'react-native-modal';



export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function handleCompletedAction(index) {
    toDoList.splice(index, 1);
    setToDoList(toDoList);
    setIsDone(!isDone);
  }

  function handleNewAction() {
    console.log(newToDo);
    setToDoList([...toDoList, newToDo]);
    console.log(toDoList);
    setNewToDo('');
    setModalVisible(false);
  }


  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar style="dark" />
        <View>
      <Modal isVisible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Nova Tarefa</Text>
          <TextInput style={styles.modalInput}
          onChangeText={text => setNewToDo(text)}
          value={newToDo}>
          </TextInput>
          <TouchableOpacity onPress={handleNewAction} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
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

          {toDoList.map((toDo, index) => (
            <View style={styles.toDo} key={toDo[index]}>
              <Text style={[isDone ? styles.toDoText : styles.toDoTextDone]}>
                {toDo}
              </Text>
              <TouchableOpacity
                style={[isDone ? styles.toDoButton : styles.toDoButtonDone]}
                onPress={() => handleCompletedAction(toDo[index])}
              >
                {!isDone && <Image source={doneIcon} />}
              </TouchableOpacity>
            </View>
          ))}

          
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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
    marginBottom: 40,
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
    justifyContent: "center",
    alignContent: "center",
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
    minWidth: 300,
    maxHeight: 200,
    alignSelf: "center",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  modalInput: {
    width: 250, 
    height: 40, 
    borderBottomColor: '#DBDBDB', 
    borderBottomWidth: 1,
    fontFamily: "OpenSans_400Regular",
    color: "#6A6A6A",
    fontSize: 16
  },
  modalText: {
    fontFamily: "OpenSans_600SemiBold",
    textTransform: 'uppercase',
    justifyContent: 'flex-start',
    color: '#6A6A6A'
  },
  modalButton: {
    width: 120,
    height: 50,
    backgroundColor: '#50E3A4',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8
  },
  modalButtonText: {
    fontFamily: "OpenSans_700Bold",
    justifyContent: 'flex-start',
    color: '#24704F',
    fontSize: 16,
    textTransform: 'uppercase'
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
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 50,
    width: 300,
    flexDirection: "row",
  },
  toDoButton: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    borderColor: "#DBDBDB",
    borderWidth: 2,
    backgroundColor: "#FFF",
    flexDirection: "column",
  },
  toDoButtonDone: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: "#50E3A4",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
});
