import React, {useCallback, useState} from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Background from "./Background";
import { blue } from "./Constants";
import Field from "./Field";
import Btn from "./Btn";
import axios from "axios";

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleChange = useCallback((param) => {
        console.log(param)
    }, [])

    const handleSubmit = async () => {
        const data = {
            email,
            senha
        }
        console.log("data", data)
        let res

        try {
            res = await axios.post('https://svd-server.onrender.com/auth/login', data)
            props.navigation.navigate("Cadastro")
        } catch (e) {
            console.log(e)
        }
        console.log(res.data)
    }

    return(
        <Background>
            <View style={{ alignItems: "center", width: 400 }}>
                <Text style={{ 
                    color: "white", 
                    fontSize: 52, 
                    fontWeight: "bold",
                    marginVertical: 50
                }}>Login</Text>

                <View style={{ 
                    backgroundColor: "white", 
                    height: 700, 
                    width: 420, 
                    borderTopLeftRadius: 150, 
                    paddingTop: 100,
                    alignItems: "center" 
                }}>
                    <Text style={{ 
                        fontSize: 34, 
                        color: blue, 
                        fontWeight: 500
                    }}>Olá, novamente!</Text>

                    <Text style={{ 
                        color: "grey", 
                        fontSize: 17, 
                        fontWeight: "bold",
                        marginTop: 5
                    }}>Faça login para continuar:</Text>

                        <Field onChangeText={setEmail}  placeholder= "E-mail" keyboardType={"email-address"} />
                        <Field onChangeText={setSenha} placeholder= "Senha" secureTextEntry={true} />
                
                    <View style={{ alignItems: "flex-end", width: "78%", paddingRight: 16, marginBottom: 30 }}>
                        <Text style={{ 
                            color: "#FF0000", 
                            fontWeight: "bold", 
                            fontSize: 16 
                        }}>Esqueceu sua senha?</Text>                   
                    </View>

                    <Btn textColor="white" bgColor={blue} btnLabel="Login" Press={handleSubmit}/>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>

                        <Text style={{ fontSize: 16 }}>Não possui uma conta? </Text>

                        <TouchableOpacity onPress={() => props.navigation.navigate("Cadastro")}>
                            <Text style={{ color: blue, fontWeight: "bold", fontSize: 16 }}>Inscreva-se.</Text>
                        </TouchableOpacity>

                    </View>

                    <Image style={{ 
                            width: 100, 
                            height: 100,
                            marginLeft: 10,
                            marginTop: 20
                        }} 
                        source={require("../assets/password.gif")} />

                </View>    
            </View>
        </Background>
    )
}

export default Login