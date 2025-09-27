import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 10,
        backgroundColor: '#BDBDBD',
        marginTop: 12
    }
});

const MainSeparator = () => {
    return(
        <View style={styles.separator} />
    )
}

export default MainSeparator