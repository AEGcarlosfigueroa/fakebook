import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        position: 'relative'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
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

const ProfileImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border-color: ${(props => props.checked ? '#FFFFFF' : '#1777f2')};
    border-width: ${(props => props.story ? 3 : 0)};
`

const Avatar =({source, online, story, checked}) => {
    return (
        <>
        <View style={styles.container}>
            <ProfileImage source={source} checked={checked} story={story}/>
            {online && <View style={styles.userActive}/>}
        </View>
        </>
    )
}

export default Avatar