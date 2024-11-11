import React, { useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }: {navigation : any}) {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do laundry', completed: true },
        { id: 2, text: 'Go to gym', completed: false },
        { id: 3, text: 'Walk dog', completed: true },
      ]);
    
    const [ newTask, setNewTask ] = useState('');
    
    const addTask = () => {
    if (newTask.trim() && !tasks.some(task => task.text.toLowerCase() === newTask.toLowerCase())) {
        const newTaskObject = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask('');
    } else {
        Alert.alert("Task already exists!");
    }
    };

    const completeTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: true } : task
        ));
    };

    return (
        <MainLayout>
            <View>
                <ToDoList tasks={tasks} completeTask={completeTask} />
                <ToDoForm
                    newTask={newTask}
                    setNewTask={setNewTask}
                    addTask={addTask}
                />
            </View>
            <View style={styles.container}>
                <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 50,
    },
});

export default HomeScreen;