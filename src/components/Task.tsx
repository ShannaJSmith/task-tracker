import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, reminder }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => reminder(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          onClick={() => {
            onDelete(task.id);
          }}
          style={{ color: 'maroon', cursor: 'pointer' }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
  reminder: PropTypes.func
};

export default Task;
