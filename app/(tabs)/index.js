import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function index () {
    return (
        <SafeAreaProvider>
           <SafeAreaView>
                <Text>Welcome to screen</Text>
                <Text>Welcome to defaultscreen</Text>
                <Link
                 href="/signup"
                 style={{
                    fontWeight: "bold",
                    color: "brown",
                 }}
                >Create a new account</Link>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    p: {
        fontSize: 16, //the unit is point
        fontWeight: "bold"
    }
})