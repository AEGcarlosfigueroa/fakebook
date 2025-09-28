import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Animated, Image, ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import * as Animations from "../animations/storyAnimations";
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 215,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    fakeCard: {
        width: 110,
        height: 200,
        marginLeft: 20,
        backgroundColor: '#FFFFFF'
    },
    personalCard: {
        width: 110,
        height: 200,
        marginRight: 10,
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        zIndex: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#DDDDDD'
    },
    personalCardStory: {
        width: '100%',
        height: 130,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        position: 'absolute',
        top: 0,
        left: 0
    },
    personalCardIcon: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#3a86e9',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        position: 'absolute',
        top: 115,
        left: 40
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
    padding-top: ${(props => props.profile ? '155px' : '45px')};
    text-align: center;
    color: ${(props => props.profile ? '#000000' : '#FFFFFF')}
`

const UserCardFooter = styled.View`
    position: absolute;
    width: 100%;
    height: 35%;
    top: 130px;
    left: 0px;
    background: ${(props => props.profile ? '#FFFFFF' : 'rgba(255,255,255,0)')};
`

const Story = () => {
    return(
        <>
            <View style={styles.container}>
                <Animated.View style={[styles.personalCard, {
                        top: Animations.cardTop,
                        left: Animations.cardLeft,
                        height: Animations.cardHeight,
                        borderRadius: Animations.cardRadius,
                        }]}>
                        <Animated.Image style={[styles.personalCardStory, {
                            top: Animations.imageTop,
                            left: Animations.imageLeft,
                            width: Animations.imageWidth,
                            height: Animations.imageHeight,
                            marginRight: Animations.imageMargin,
                            marginTop: Animations.imageMargin,
                            borderRadius: Animations.imageRadius,
                            borderBottomLeftRadius: Animations.imageBottomRadius,
                            borderBottomRightRadius: Animations.imageBottomRadius
                        }]} source={require('../../assets/images/story.jpg')}/>
                            <Text as={Animated.Text} profile={true} style={{
                                opacity: Animations.textOpacity,
                                scaleX: Animations.textScale,
                                scaleY: Animations.textScale,
                            }}>Crear una historia</Text>
                        <Animated.View style={[styles.personalCardIcon, {
                            top: Animations.iconTop,
                            left: Animations.iconLeft,
                            transform: [{scale: Animations.iconScale}]
                        }]}>
                            <MaterialCommunityIcons name="plus" size={26} color="#FFFFFF"/>
                        </Animated.View>
                    </Animated.View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:10, flexDirection: 'row'}} scrollEventThrottle={5}
                onScroll={Animated.event([
                    {
                        nativeEvent: { contentOffset: {x: Animations.scroll_x} }
                    }
                ])}>
                    <View style={styles.fakeCard}/>
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