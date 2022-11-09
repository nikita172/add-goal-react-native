import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default function App() {

  const [cousreGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(goals) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: goals, id: Math.random().toString() },]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((goalItems) => {
      return goalItems.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="add new goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput modalIsVisible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={cousreGoals} renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item} deleteGoalHandler={deleteGoalHandler} id={itemData.item.id} />
            );
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View >
    </>

  );
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 5
  },

})
