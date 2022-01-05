'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const prop_types_1 = __importDefault(require('prop-types'));
const fa_1 = require('react-icons/fa');
const Task = ({ task, onDelete, reminder }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => reminder(task.id)}>
      <h3>
        {task.text}
        <fa_1.FaTimes
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
  task: prop_types_1.default.object,
  onDelete: prop_types_1.default.func,
  reminder: prop_types_1.default.func
};
exports.default = Task;
