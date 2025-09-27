import React from "react";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        position: 'relative'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    userActive: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 15,
        height: 15,
        borderRadius: 8,
        backgroundColor: '#10D24B',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FFFFFF'
    }
});

const Avatar =({source, online}) => {
    return (
        <>
        <View style={styles.container}>
            <Image style={styles.profileImage} source={source}></Image>
            {online && <View style={styles.userActive}/>}
        </View>
        </>
    )
}

export default Avatar