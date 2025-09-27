import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userCard: {
        width: 110,
        height: 200,
        marginRight: 10,
        position: 'relative'
    },
    userCardStory: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    userCardPlus: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#3a86e9',
        alignItems: 'center',
        position: 'absolute',
        top: 115,
        left: 40
    },
    userCardFooter: {
        position: 'absolute',
        width: '100%',
        height: '35%',
        top: 130,
        left: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#DDDDDD',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    userOnCard: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin: 0 10px;
    padding-top: ${(props => props.profile ? '20px' : '45px')};
    text-align: center;
    color: ${(props => props.profile ? '#000000' : '#FFFFFF')}
`

const UserCardFooter = styled.View`
    position: absolute;
    width: 100%;
    height: 35%;
    top: 130px;
    left: 0px;
    border: ${(props => props.profile ? '1px solid #DDDDDD' : 0)};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: ${(props => props.profile ? '#FFFFFF' : 'rgba(255,255,255,0)')};
`

const Story = () => {
    return(
        <>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:10}}>
                    <View style={styles.userCard}>
                        <Image style={styles.userCardStory} source={require('../../assets/images/story.jpg')}/>
                        <UserCardFooter profile={true}>
                            <Text profile={true}>Crear una historia</Text>
                        </UserCardFooter>
                        <View style={styles.userCardPlus}>
                            <MaterialCommunityIcons name="plus" size={26} color="#FFFFFF"/>
                        </View>
                    </View>
                    {fakeStories.map((story, i) => {
                        return(
                            <View style={styles.userCard} key={i.toString()}>
                                <Image style={styles.userCardStory} source={story.source}/>
                                <UserCardFooter profile={false}>
                                    <Text profile={false}>{story.name}</Text>
                                </UserCardFooter>
                                <View style={styles.userOnCard}>
                                    <Avatar source={story.user} story={true} checked={story.checked}/>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </>
    )
}

export default Story