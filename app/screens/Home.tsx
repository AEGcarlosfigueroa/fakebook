import { StyleSheet, View } from "react-native";
import MainSeparator from "../components/MainSeparator";
import Post from "../components/Post";
import Story from "../components/Story";
import ToolBar from "../components/ToolBar";
import Users from "../components/Users";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
            <Post/>
        </View>
    )
}

export default Home