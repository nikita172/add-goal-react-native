import { Modal, StyleSheet } from 'react-native';
import { View, Button, TextInput, Image } from 'react-native';
import { useState } from 'react';
function GoalInput(props) {
    const [goals, setGoals] = useState("");
    function goalInputHandler(text) {
        setGoals(text);
    }
    function addGoalHandler() {
        props.onAddGoal(goals);
        setGoals("");


    }
    return (
        <Modal visible={props.modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require("../assets/goal.png")}
                    style={styles.image} />
                <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler} value={goals} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goals" onPress={() => addGoalHandler()} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>

                </View>
            </View>


        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"

    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    button: {
        marginHorizontal: 8,
        width: 100
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})
export default GoalInput;