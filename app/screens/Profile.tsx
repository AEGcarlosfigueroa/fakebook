import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        height: 500
    }
})

const Profile = () => {
    return (
        <View style={styles.view}>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile