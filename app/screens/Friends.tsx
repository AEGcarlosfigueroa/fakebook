import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        height: 500
    }
})

const Friends = () => {
    return (
        <View style={styles.view}>
            <Text>Friends</Text>
        </View>
    )
}

export default Friends