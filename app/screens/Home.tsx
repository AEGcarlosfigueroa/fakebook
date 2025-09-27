import { StyleSheet, View } from "react-native";
import MainSeparator from "../components/MainSeparator";
import ToolBar from "../components/ToolBar";
import Users from "../components/Users";

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        height: 500
    }
})

const Home = () => {
    return (
        <View style={styles.view}>
            <ToolBar />
            <MainSeparator />
            <Users />
        </View>
    )
}

export default Home