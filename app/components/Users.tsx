import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fakeUsers from "../data/fakeData";
import Avatar from "./Avatar";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    room: {
        width: 100,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#82b1dd',
        borderRadius: 20,
        paddingRight: 15,
        marginRight: 12
    },
    text: {
        color: '#1777ff',
        fontSize: 12,
        paddingLeft: 6
    },
    user: {
        marginRight: 12
    }
});

const Users = () => {
    return(
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 12}}>
                <TouchableOpacity style={styles.room}>
                    <MaterialCommunityIcons name="video-plus" size={26} color="#474BEE" />
                    <Text style={styles.text}>Crear sala</Text>
                </TouchableOpacity>
                {fakeUsers.map((elem, i) => {
                    return(
                        <View style={styles.user} key={i.toString()}>
                            <Avatar source={elem.source} online={elem.online} />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Users