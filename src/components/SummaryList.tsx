import { useEffect, useState } from 'react';
import { fetchSummaries, deleteSummary } from '../services/apiService';
import { Summary } from '../types';
import styles from '../styles/SummaryList.module.css';
import Button from './Button';
import { useNotification } from '../contexts/NotificationContext';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

const SummaryList = () => {
  const [page, setPage] = useState<number>(1);
  const [summaryList, setSummaryList] = useState<Summary[]>([]);
  const { showNotification } = useNotification();
  const [isGetMoreLoading, setIsGetMoreLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getNextSummaries = async () => {
      setIsGetMoreLoading(true);
      const summaries = await fetchSummaries(page);
      setSummaryList((preSummaryList) => [...preSummaryList, ...summaries]);
      setIsGetMoreLoading(false);
    };
    getNextSummaries();
  }, [page]);

  const onDelete = async (summaryId: number) => {
    await deleteSummary(summaryId);
    const updatedList = summaryList.filter((summary) => {
      return summary.id !== summaryId;
    });
    setSummaryList(updatedList);
    showNotification({ message: 'deleteSummarySuccess', type: 'success' });
  };

  const onMore = () => {
    setPage((prePage) => prePage + 1);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
    });
  };

  const isDarkRowClass = (rowNumber: number): string => {
    return rowNumber % 2 ? styles.darkRow : '';
  };

  const onSummaryClicked = (summary: Summary) => {
    navigate(`/summary/${summary.id}`, {
      state: {
        title: summary.translated_title,
        body: summary.translated_body,
        action: summary.translated_action,
      },
    });
  };

  useEffect(() => {
    console.log('summary', summaryList);
  }, [summaryList]);
  return (
    <div className={styles.summaryListWrapper}>
      {summaryList.map((summary, index) => (
        <div
          className={`${styles.summaryRow} ${isDarkRowClass(index)}`}
          key={`${summary.id}${index}`}
          onClick={() => onSummaryClicked(summary)}
        >
          <div className={styles.date}>{formatDate(summary.created_at)}</div>
          <div className={styles.title}>{summary.translated_title}</div>
          <div className={styles.deleteBtn}>
            <Button
              label={t('deleteSummaryButton')}
              onClick={() => onDelete(summary.id)}
              size="small"
            />
          </div>
        </div>
      ))}
      <div className={styles.moreBtnWrapper}>
        <Button
          label={t('moreSummaryButton')}
          onClick={onMore}
          isLoading={isGetMoreLoading}
        />
      </div>
    </div>
  );
};

export default SummaryList;
