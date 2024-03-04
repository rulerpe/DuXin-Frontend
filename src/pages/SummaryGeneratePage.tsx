import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { STAGES } from '../types';
import useActionCable from '../hooks/useActionCable';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import SummaryDetail, { SummaryDetailProps } from '../components/SummaryDetail';

const SummaryGeneratePage = () => {
  const navigate = useNavigate();
  const { currentStage, translatedSummary, error } = useActionCable(
    'SummaryTranslationChannel',
  );

  const { t } = useTranslation();

  const handleButtonClick = () => {
    navigate('/camera');
  };

  const errorView = () => {
    return (
      <>
        <h2>{t('summaryGeneratePageError')}</h2>
        <Button label={t('navigateToCamera')} onClick={handleButtonClick} />
      </>
    );
  };

  const progressBarView = () => {
    return (
      <>
        <ProgressBar
          stages={Object.keys(STAGES)}
          currentStage={STAGES[currentStage]}
        />
        <br />
        <p>{t(`${currentStage}`)}</p>
      </>
    );
  };

  const summaryDetailView = ({ summary }: SummaryDetailProps) => {
    return (
      <>
        <SummaryDetail summary={summary} />
        <br />
        <Button label={t('navigateToCamera')} onClick={handleButtonClick} />
      </>
    );
  };

  const views = () => {
    if (error) {
      return errorView();
    }
    if (currentStage === 'summary_translation_completed' && translatedSummary) {
      return summaryDetailView({
        summary: {
          title: translatedSummary.title,
          body: translatedSummary.body,
          action: translatedSummary.action,
        },
      });
    }
    return progressBarView();
  };

  return <PageWrapper isScrollable={true}>{views()}</PageWrapper>;
};

export default SummaryGeneratePage;
