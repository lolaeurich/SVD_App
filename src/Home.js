import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import Background from "./Background"
import Btn from "./Btn"
import { blue, white } from "./Constants"

const Home = (props) => {
    return (
        <Background>
            <View style={{ 
                marginHorizontal: 80, 
                marginVertical: 180, 
                flex: 1, 
                justifyContent: "space-between", 
                alignItems: "center" 
                }}>

                <Text style={{ 
                    color: "white", 
                    fontSize: 30 
                    }}>Bem-vindo(a) ao
                </Text>
                
                <Image style={{
                    marginTop: 30}} 
                    source={require("../assets/logo-svd.png")}
                />
            
            <View style={{ 
                flex: 1, 
                justifyContent: "space-between", 
                marginTop: 100 
                }}>

                <Btn 
                    bgColor={blue} 
                    textColor={white} 
                    btnLabel="Login" 
                    Press={() => props.navigation.navigate("Login")}
                />

                <Btn 
                    bgColor={white} 
                    textColor={blue} 
                    btnLabel="Cadastre-se" 
                    Press={() => props.navigation.navigate("Cadastre-se")}
                />
                
            </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({})

export default Home