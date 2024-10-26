import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

type tasksProps = {
    tasks: {
        id : number,
        text: string,
        completed: boolean,
    }[];
};

function ToDoList(props: tasksProps): React.JSX.Element {
    console.log(props.tasks);
    return (
      <View>
        <ScrollView>
          {props.tasks.map((task) => (
            <Pressable key={task.id}>
              <View style={[styles.task, task.completed ? styles.completed : null]}>
                <Text style={styles.taskText}>{task.text}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
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
  
  export default ToDoList;
  