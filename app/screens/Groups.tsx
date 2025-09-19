import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        height: 500
    }
})

const Groups = () => {
    return (
        <View style={styles.view}>
            <Text>Groups</Text>
        </View>
    )
}

export default Groups