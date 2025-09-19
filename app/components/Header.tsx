import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 58,
        padding: 11,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: "#3a86e9",
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -0.3
    },
    row: {
        flexDirection: 'row'
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginLeft: 16,
        backgroundColor: "#EEEEEE",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const Header = () => {

    return(
        <View style={style.container}>
        <Text style={style.text}>Fakebook</Text>

        <View style={style.row}>
            <View style={style.button}>
                <MaterialIcons name='search' size={26} color='black' />
            </View>
            <View style={style.button}>
            <MaterialIcons name='messenger' size={26} color='black' />
            </View>
        </View>
    </View>
    );
    
}

export default Header