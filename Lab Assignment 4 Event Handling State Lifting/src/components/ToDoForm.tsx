import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

function ToDoForm({addTask}: { addTask: (newTask: string) => void }): React.JSX.Element {

  const [ newTask, setNewTask ] = useState('');

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <Button title="Add" onPress={() => {
          addTask(newTask);
          setNewTask('');
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
