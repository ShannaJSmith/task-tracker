import Task from './Task'
import { useState } from 'react'

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Clean cat litter',
      day: 'Dec 6th at 1:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Do dishes',
      day: 'Dec 5th at 8:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Write code',
      day: 'Dec 8th at 3:00pm',
      reminder: false,
    },
  ])
  
  return (
    <div>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </div>
  )
}

export default Tasks
