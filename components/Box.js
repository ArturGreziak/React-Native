import { View, Text, StyleSheet} from "react-native";

export default function Box({childen, style}) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{childen}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    box: {
        backgroundColor: "#ffffff",
        padding: 20,
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
    }
});
