import { useTranslation } from 'react-i18next';
import styles from '../styles/AccountPage.module.css';
import { useUser } from '../contexts/UserContext';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';
import SummaryList from '../components/SummaryList';
import { logout, createTempUser } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../contexts/NotificationContext';
const AccountPage = () => {
  const { user, setUser } = useUser();
  const { t, i18n } = useTranslation();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      await logout();
      // Create a temp user account right after logout
      const tempUserResponse = await createTempUser(i18n.language);
      setUser(tempUserResponse.user);
      showNotification({ message: 'logoutSuccess', type: 'success' });
      navigate('/');
    } catch (error) {}
  };
  return (
    <PageWrapper hasPadding={false} isCentered={false} isScrollable={true}>
      <div className={styles.accountInfo}>
        <div className={styles.phoneNumber}>
          <span>{t('phoneNumberLabel')}: </span>
          <span>
            <strong>{user?.phone_number}</strong>
          </span>
        </div>
        <div className={styles.logoutBtn}>
          <Button
            label={t('logoutButton')}
            onClick={onLogout}
            size="small"
          ></Button>
        </div>
      </div>
      <div className={styles.summaryHistoryTitle}>
        <span>{t('summaryHistory')} : </span>
      </div>
      <SummaryList />
    </PageWrapper>
  );
};

export default AccountPage;
