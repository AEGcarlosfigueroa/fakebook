import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        height: 500
    }
})

const Home = () => {
    return (
        <View style={styles.view}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default Home