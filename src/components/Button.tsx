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
      className={`${styles.button} ${styles[size]} ${isDisabled ? styles.disabled : ''}`}
      onClick={handleClick}
      disabled={isDisabled}
      data-testid="button"
    >
      {isLoading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          spin={true}
          data-testid="buttonLoadingIcon"
        />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
