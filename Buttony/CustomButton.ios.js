import React from "react";
import { Pressable, Text } from "react-native";

 const CustomButton =({onPress, title}) => {
    return (
        <Pressable
        onPress={onPress}
        style={{justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'red', 
        borderRadius: 10, 
        padding: 10,}}
        >
            <Text style={{color: '#000000', width: 300}}>{title}</Text>
        </Pressable>
    )
}
export default CustomButton;