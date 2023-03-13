import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function InternalBtn({ bgColor, btnLabel, textColor, Press }) {
    return(
        <TouchableOpacity
        onPress={Press}
            style={{    
            backgroundColor: bgColor, 
            borderRadius: 10, 
            alignItems: "center",
            width: 260,
            height: 60,
            paddingVertical: 12,
            marginVertical: 12
            }}>
           <Text style={{ 
            color: textColor, 
            fontSize: 22, 
            fontWeight: "bold" 
            }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}