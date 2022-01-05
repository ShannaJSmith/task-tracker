// import PropTypes from 'prop-types';

interface Props {
  color: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ color, text, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

// Button.propTypes = {
//   color: PropTypes.string,
//   text: PropTypes.string,
//   onClick: PropTypes.func
// };

export default Button;
