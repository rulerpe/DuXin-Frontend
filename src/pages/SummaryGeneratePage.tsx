import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { STAGES } from '../types';
import useActionCable from '../hooks/useActionCable';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import SummaryDetail from '../components/SummaryDetail';

const SummaryGeneratePage = () => {
  const navigate = useNavigate();
  const { currentStage, translatedSummary } = useActionCable(
    'SummaryTranslationChannel',
  );

  const { t } = useTranslation();

  const handleButtonClick = () => {
    navigate('/camera');
  };

  return (
    <PageWrapper isScrollable={true}>
      {currentStage === 'summary_translation_completed' && translatedSummary ? (
        <>
          <SummaryDetail
            summary={{
              title: translatedSummary.title,
              body: translatedSummary.body,
              action: translatedSummary.action,
            }}
          />
          <br />
          <Button label={t('navigateToCamera')} onClick={handleButtonClick} />
        </>
      ) : (
        <>
          <ProgressBar
            stages={Object.keys(STAGES)}
            currentStage={STAGES[currentStage]}
          />
          <br />
          <p>{t(`${currentStage}`)}</p>
        </>
      )}
    </PageWrapper>
  );
};

export default SummaryGeneratePage;
