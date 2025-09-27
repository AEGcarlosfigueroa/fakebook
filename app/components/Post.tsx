import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fakeData from "../data/fakeData";
import Avatar from "./Avatar";
import MainSeparator from "./MainSeparator";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        marginTop: 5,
        paddingRight: 10
    },
    user: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#222121'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontSize: 9,
        color: '#747476',
    },
    postContent: {
        fontSize: 12,
        color: '#222121',
        lineHeight: 16,
        paddingRight: 11
    },
    photo: {
        marginTop: 9,
        width: '100%',
        height: 300
    },
    footer: {
        paddingRight: 11
    },
    fosterCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 9
    },
    iconCount: {
        backgroundColor: '#1878f3',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    textCount: {
        fontSize: 11,
        color: '#424040',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#f9f9f9'
    },
    footerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 9
    },
    button: {
        flexDirection: 'row'
    },
    icon: {
        marginRight: 6
    },
    text: {
        fontSize: 12,
        color: '#424040'
    }
});

const Post = () => {
    return (
        <>
        {fakeData.map((user, i) => {
            return(
                <>
                <View style={styles.container} key={i.toString()}>
                    <View style={styles.header}>
                        <View style={styles.row}>
                            <Avatar source={user.source}/>
                            <View style={{paddingLeft: 10}}>
                                <Text style={styles.user}>{user.name}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.time}>{user.time}</Text>
                                    <MaterialCommunityIcons name='circle-small' size={12} color='#747476'/>
                                    <MaterialCommunityIcons name='earth' size={10} color='#747476'/>
                                </View>
                            </View>    
                        </View> 
                        <MaterialCommunityIcons name='dots-horizontal' size={20} color='#747476'/>   
                    </View> 
                     <Text style={styles.postContent}>{user.postContent}</Text>
                     <Image style={styles.photo} source={user.postImage}></Image>
                     <View style={styles.footer}>
                        <View style={styles.fosterCount}>
                            <View style={styles.row}>
                                <View style={styles.iconCount}>
                                    <MaterialCommunityIcons name='thumb-up-outline' size={26} color='#FFFFFF'/>
                                </View>
                            </View>
                        </View>
                     </View>
                     <View style={styles.separator}/>
                     <View style={styles.footerMenu}>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name='thumb-up-outline' size={26} color='#424040'/>
                            </View>
                            <Text style={styles.text}>Me gusta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name='comment-outline' size={26} color='#424040'/>
                            </View>
                            <Text style={styles.text}>Comentar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name='share-outline' size={26} color='#424040'/>
                            </View>
                            <Text style={styles.text}>Compartir</Text>
                        </TouchableOpacity>
                     </View>
                </View>
                <MainSeparator/>
                </>
            )
        })}
        </>
    )
}

export default Post;