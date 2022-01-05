'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('./index.css');
const react_1 = require('react');
const Header_1 = __importDefault(require('../src/components/Header'));
const Tasks_1 = __importDefault(require('../src/components/Tasks'));
const AddTask_1 = __importDefault(require('../src/components/AddTask'));
const App = () => {
  const [showAddTask, setShowAddTask] = (0, react_1.useState)(false);
  const [tasks, setTasks] = (0, react_1.useState)([]);
  (0, react_1.useEffect)(() => {
    const getTasks = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        const serverTasks = yield fetchTasks();
        setTasks(serverTasks);
      });
    getTasks();
  }, []);
  // seperated fetchTasks function from useEffect so it can be used elsewhere
  // Fetch Tasks
  const fetchTasks = () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield fetch('http://localhost:5000/tasks');
      const data = yield res.json();
      console.log('data:', data);
      return data;
    });
  const fetchTask = (id) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield fetch(`http://localhost:5000/tasks/${id}`);
      const data = yield res.json();
      return data;
    });
  // Add Task
  const addTask = (task) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      const data = yield res.json();
      setTasks([...tasks, data]);
    });
  // Delete Task
  const deleteTask = (id) =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      });
      setTasks(tasks.filter((task) => task.id !== id));
    });
  // Toggle Reminder border
  const reminder = (id) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const taskToggle = yield fetchTask(id);
      const updateTask = Object.assign(Object.assign({}, taskToggle), {
        reminder: !taskToggle.reminder
      });
      const res = yield fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updateTask)
      });
      const data = yield res.json();
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? Object.assign(Object.assign({}, task), { reminder: data.reminder })
            : task
        )
      );
    });
  return (
    <div className="container">
      <Header_1.default onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask_1.default onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks_1.default tasks={tasks} onDelete={deleteTask} reminder={reminder} />
      ) : (
        'Looks like you have nothing more to do. Nice!'
      )}
    </div>
  );
};
exports.default = App;
