'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const prop_types_1 = __importDefault(require('prop-types'));
const Button = ({ color, text, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};
Button.propTypes = {
  color: prop_types_1.default.string,
  text: prop_types_1.default.string,
  onClick: prop_types_1.default.func
};
exports.default = Button;
