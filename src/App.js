import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '25.11.2021',
      reminder: 'true',
    },
    {
      id: 2,
      text: 'Homework',
      day: '21.11.2021',
      reminder: 'true',
    },
    {
      id: 3,
      text: 'English Exam',
      day: '19.11.2021',
      reminder: 'true',
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    console.log('reminder', id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No current tasks to show :('
      )}
    </div>
  );
};

export default App;
