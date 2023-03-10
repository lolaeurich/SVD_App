import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import React from "react"
import { StyleSheet, Button, View, Modal, Text } from "react-native"
//import App1 from "./src/components/Select/Select"
import DropDownPicker from 'react-native-dropdown-picker'

import Scanner from "./src/components/Scanner"

export default function InitialPage() {
  const [modalVisible, setModalVisible] = React.useState(false)

  //const [type, setType] = React.useState("")
  const [data, setData] = React.useState("")

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

  const onCodeScanned = (data) => {
    setData(data)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <StatusBar style="auto" />

      <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{height: 300, width: 300}}
        />

      <Button title="Escanear meu código de barras" onPress={() => setModalVisible(true)} />

      <Text style={{padding:50}}>PIN: {data}</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(153,204,255)",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
})
