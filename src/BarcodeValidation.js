import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import React from "react"
import { StyleSheet, Button, View, Modal, Text, Image, TouchableOpacity } from "react-native"

//import App1 from "./src/components/Select/Select"

import Background from "./Background"
import InternalBtn from "./InternalBtn"

export default function BarcodeValidation(props) {
    const [modalVisible, setModalVisible] = React.useState(false)

    //const [type, setType] = React.useState("")
    const [data, setData] = React.useState("")
  
  
    const onCodeScanned = (data) => {
      setData(data)
      setModalVisible(false)
    }
  
    return (
      <Background>
  
      <View style={{ 
                      flex: 1,
                      backgroundColor: "white",
                      marginVertical: 90,
                      marginLeft: 16, 
                      height: 700, 
                      width: 380, 
                      borderRadius: 20, 
                      paddingTop: 50,
                      alignItems: "center" 
                  }}>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
         
        </Modal>
  
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true} />          
  
        <Image style={{ 
                width: 300, 
                height: 300,
                marginLeft: 10,
                marginTop: 0
              }} 
              source={require("../assets/verified.gif")} />

        <Text style={{paddingTop:10, paddingHorizontal: 20, fontSize: 18, fontWeight: "bold", color: "#00CED1"}}>Tudo certo com o seu código de barras!</Text>      
  
        <TouchableOpacity style={{
            backgroundColor: "#1a5390", 
            borderRadius: 10, 
            alignItems: "center",
            width: 310,
            height: 60,
            paddingVertical: 12,
            marginVertical: 100}} onPress={() => props.navigation.navigate("FinalScreen")} >
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold"}} >Clique para finalizar a leitura</Text> 
      </TouchableOpacity>    

      
      </View>
     
      </Background>
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