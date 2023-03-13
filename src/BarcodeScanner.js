import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import React from "react"
import { StyleSheet, Button, View, Modal, Text, Image, TouchableOpacity } from "react-native"

//import App1 from "./src/components/Select/Select"

import QRCodeScanner from "./QRCodeScanner"
import Background from "./Background"
import InternalBtn from "./InternalBtn"

export default function BarcodeScanner(props) {
  const [modalVisible, setModalVisible] = React.useState(false)

  //const [type, setType] = React.useState("")
  const [data, setData] = React.useState("")


  const onCodeScanned = (data) => {
    setData(data)
    setModalVisible(false) 
    props.navigation.navigate("BarcodeValidation")
  }


  return (
    <Background>

      <View style={styles.container}>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>

        <View style={styles.modal}>
          <QRCodeScanner onCodeScanned={onCodeScanned} />
          <TouchableOpacity style={{backgroundColor: "#1a5390", 
            borderRadius: 10, 
            alignItems: "center",
            width: 260,
            height: 60,
            paddingVertical: 12,
            marginVertical: 12}} onPress={() => setModalVisible(false)}>
            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold"}}>Cancelar leitura</Text>  
          </TouchableOpacity >
        </View>

      </Modal>

      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true} />

        <Image style={{ 
              width: 300, 
              height: 300,
              marginLeft: 5,
              marginTop: 0
            }} 
            source={require("../assets/barcode.gif")} />


      <TouchableOpacity style={{
            backgroundColor: "#1a5390", 
            borderRadius: 10, 
            alignItems: "center",
            width: 310,
            height: 60,
            paddingVertical: 15,
            marginVertical: 12}} onPress={() => setModalVisible(true)} >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold"}} >Escanear meu código de barras</Text> 
      </TouchableOpacity>  

      <Text style={{paddingTop:40, paddingHorizontal: 40, fontSize: 18}}>Para escanear o código de barras,
      basta pressionar o botão acima, apontar a câmera do seu celular para o adesivo colado na parte 
      interna da ṕorta do veículo e aguardar alguns segundos.</Text>

      {/* <Text style={{padding:50}}>PIN: {data}</Text> */}
    
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 90,
    marginLeft: 16, 
    height: 700, 
    width: 380, 
    borderRadius: 20, 
    paddingTop: 50,
    alignItems: "center"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
})


