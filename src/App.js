import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
