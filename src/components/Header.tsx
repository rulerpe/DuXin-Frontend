import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { fetchCurrentUser, createTempUser } from '../services/apiService';
import { useUser } from '../contexts/UserContext';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const getUser = async () => {
      try {
        const getUserResponse = await fetchCurrentUser();
        console.log('getUserResponse.user', getUserResponse.user);
        setUser(getUserResponse.user);
        i18n.changeLanguage(getUserResponse.user.language);
      } catch (error) {
        // if no authuraized user if found, create a temp user account
        if (isAxiosError(error) && error.response?.status === 401) {
          try {
            const tempUserResponse = await createTempUser(i18n.language);
            setUser(tempUserResponse.user);
          } catch (error) {
            console.error('Failed to create temp user', error);
          }
        } else {
          console.error('Failed to fetch user', error);
        }
      }
    };
    getUser();
  }, []);
  const onBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  const onUser = () => {
    if (user && user.user_type === 'USER') {
      navigate('/account');
    } else {
      navigate('login');
    }
  };
  return (
    <header className={styles.header}>
      <button onClick={onBack} className={styles.iconButton}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <Link to="/">
        <h1 className={styles.title}>{t('appName')}</h1>
      </Link>

      <button onClick={onUser} className={styles.iconButton}>
        <FontAwesomeIcon icon={faUser} />
      </button>
    </header>
  );
};

export default Header;
