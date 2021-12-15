import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onDelete, reminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} reminder={reminder} />
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  reminder: PropTypes.func
};

export default Tasks;
