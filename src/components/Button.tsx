import styles from '../styles/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: 'small' | 'median' | 'large';
}

const Button = ({
  label,
  onClick,
  isLoading = false,
  isDisabled = false,
  size = 'median',
}: ButtonProps) => {
  const handleClick = () => {
    if (!isLoading && !isLoading) {
      onClick();
    }
  };
  return (
    <button
      className={`${styles.button} ${isDisabled ? styles.disabled : ''} ${styles[size]}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isLoading ? <FontAwesomeIcon icon={faSpinner} spin={true} /> : label}
    </button>
  );
};

export default Button;
