"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("./Button"));
const Header = ({ title, onAdd, showAddTask }) => {
    return (<header className="header">
      <h1>{title}</h1>
      <Button_1.default text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? 'maroon' : 'hotpink'} onClick={onAdd}/>
    </header>);
};
Header.defaultProps = {
    title: 'Task Tracker'
};
Header.propTypes = {
    title: prop_types_1.default.string.isRequired,
    onAdd: prop_types_1.default.func,
    showAddTask: prop_types_1.default.bool
};
exports.default = Header;
