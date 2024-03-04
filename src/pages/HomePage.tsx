import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
import Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import { updateUserLanguage } from '../services/apiService';
import { useUser } from '../contexts/UserContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser } = useUser();

  const handleButtonClick = () => {
    navigate('/camera');
  };
  const handleLanguageChange = async (language: string) => {
    try {
      setIsLoading(true);
      const response = await updateUserLanguage(language);
      i18n.changeLanguage(language);
      setUser(response.user);
    } catch (error) {
      console.error('Change language failed');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PageWrapper>
      <h2>{t('welcomText')}</h2>
      <Button
        label={t('navigateToCamera')}
        onClick={handleButtonClick}
        isLoading={isLoading}
      />
      <LanguageSelector
        onLanguageChange={handleLanguageChange}
        isDisabled={isLoading}
      />
    </PageWrapper>
  );
};

export default HomePage;
