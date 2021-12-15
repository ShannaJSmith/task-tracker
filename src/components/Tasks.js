import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.string,
  onDelete: PropTypes.function
};

export default Tasks;
