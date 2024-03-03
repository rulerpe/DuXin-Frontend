import { useTranslation } from 'react-i18next';
interface SummaryDetailProps {
  summary: { title: string; body: string; action: string };
}

const SummaryDetail = ({ summary }: SummaryDetailProps) => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('summaryTitle')}</h2>
      <p>{summary.title}</p>
      <h2>{t('summaryBody')}</h2>
      <p>{summary.body}</p>
      <h2>{t('summaryAction')}</h2>
      <p>{summary.action}</p>
    </>
  );
};

export default SummaryDetail;
