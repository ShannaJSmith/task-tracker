"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("./Task"));
const prop_types_1 = __importDefault(require("prop-types"));
const Tasks = ({ tasks, onDelete, reminder }) => {
    return (<>
      {tasks.map((task) => (<Task_1.default key={task.id} task={task} onDelete={onDelete} reminder={reminder}/>))}
    </>);
};
Tasks.propTypes = {
    tasks: prop_types_1.default.array,
    onDelete: prop_types_1.default.func,
    reminder: prop_types_1.default.func
};
exports.default = Tasks;
