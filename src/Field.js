import React from "react";
import { View, StyleSheet, TextInput } from "react-native"
import { blue } from "./Constants";

const Field = (props) => {
    return(
        <TextInput {...props} style={{ 
            borderRadius: 100,
            color: blue,
            paddingHorizontal: 20,
            fontSize: 18,
            backgroundColor: "rgb(220, 220, 220)",
            marginVertical: 15,
            width: 350,
            height: 50 
            }}
            placeholderTextColor={blue}>    
        </TextInput>
    )
}

export default Field