import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Clean cat litter',
      day: 'Dec 6th at 1:00pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Do dishes',
      day: 'Dec 5th at 8:00pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Write code',
      day: 'Dec 8th at 3:00pm',
      reminder: false
    }
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder border
  const reminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} reminder={reminder} />
      ) : (
        'Looks like you have nothing more to do. Nice!'
      )}
    </div>
  );
};

export default App;
