import PropTypes from 'prop-types';

type Props = {
  color: string,
  text: string,
  onClick: () => void
}

const Button = ({ color, text, onClick }: Props) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
