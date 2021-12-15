import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
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
  task: PropTypes.string,
  onDelete: PropTypes.function
};

export default Task;
