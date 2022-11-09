import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native"
function GoalItem({ text, deleteGoalHandler, id }) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: "#ddd" }} onPress={deleteGoalHandler.bind(this, id)} >
                <Text style={styles.goalText} >{text.text}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 5,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
        padding: 8,
    }
})
export default GoalItem;