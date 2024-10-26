/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
} from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ]);

  const addTask = (newTask: string) => {
    if (newTask.trim() && !tasks.some(task => task.text.toLowerCase() === newTask.toLowerCase())) {
      const newTaskObject = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
    } else {
      Alert.alert("Task already exists!");
    }
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
