import { StyleSheet, View } from "react-native";
import MainSeparator from "../components/MainSeparator";
import Story from "../components/Story";
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
            <MainSeparator/>
            <Story/>
            <MainSeparator/>
        </View>
    )
}

export default Home