"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const Alert_1 = __importDefault(require("./Alert"));
const react_1 = require("react");
const AddTask = ({ onAdd }) => {
    const [text, setText] = (0, react_1.useState)('');
    const [day, setDay] = (0, react_1.useState)('');
    const [reminder, setReminder] = (0, react_1.useState)(false);
    const [alert, setAlert] = (0, react_1.useState)(false);
    const onSubmit = (event) => {
        event.preventDefault();
        // if nothing is inputted give an alert
        if (!text) {
            // alert('Please add a task');
            setAlert(true);
            return;
        }
        // if input is present, add it. Then reset/clear the form
        onAdd({ text, day, reminder });
        setText('');
        setDay('');
        setReminder(false);
    };
    return (<form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task </label>
        <input type="text" placeholder="Add Task" value={text} onChange={(event) => setText(event.target.value)}/>
      </div>
      <div className="form-control">
        <label> Day & Time </label>
        <input type="text" placeholder="Add Day & Time" value={day} onChange={(event) => setDay(event.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label> Set Reminder </label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(event) => setReminder(event.currentTarget.checked)}/>
      </div>
      {alert && <Alert_1.default />}
      <input className="btn btn-block" type="submit" value="Save"/>
    </form>);
};
AddTask.propTypes = {
    onAdd: prop_types_1.default.func
};
exports.default = AddTask;
