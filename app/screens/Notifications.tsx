import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        height: 500
    }
})

const Notifications = () => {
    return (
        <View style={styles.view}>
            <Text>Notifications</Text>
        </View>
    )
}

export default Notifications