import { View, Text, StyleSheet } from "react-native";

export default function Greet({name}) {
    return (
        <View style={styles.container}>
            <Text>Hello {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "plum", padding: 40}
});