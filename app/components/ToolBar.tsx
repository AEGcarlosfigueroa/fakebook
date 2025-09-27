import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Avatar from "./Avatar";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 92
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '100%',
        paddingRight: 11,
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: '85%',
        padding: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#DDD',
        margin: 10,
        borderRadius: 30
    },
    divider: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#DDDDDD'
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42
    },
    menuText: {
        paddingLeft: 11,
        fontWeight: 500,
        fontSize: 12
    },
    separator: {
        width: 1,
        height: 26,
        backgroundColor: '#F0F0F0'
    }
});

const ToolBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Avatar source={require("../../assets/images/12.jpg")} online={true}/>
                <TextInput style={styles.input} placeholder="Qué estas pensando?"/>
            </View>
            <View style={styles.divider}/>
            <View style={styles.row}>
                <View style={styles.menu}>
                    <MaterialCommunityIcons name='video-account' size={26} color='#F44337' />
                    <Text style={styles.menuText}>Directo</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.menu}>
                    <MaterialCommunityIcons name='image-multiple' size={26} color='#4CAF50' />
                    <Text style={styles.menuText}>Foto</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.menu}>
                    <MaterialCommunityIcons name='video-plus' size={26} color='#A74BEE' />
                    <Text style={styles.menuText}>Sala</Text>
                </View>
            </View>
        </View>
    )
}

export default ToolBar