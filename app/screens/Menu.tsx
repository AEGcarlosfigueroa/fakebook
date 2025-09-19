import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        height: 500
    }
})

const Menu = () => {
    return (
        <View style={styles.view}>
            <Text>Menu</Text>
        </View>
    )
}

export default Menu