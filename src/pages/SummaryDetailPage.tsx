import { useLocation } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SummaryDetail from '../components/SummaryDetail';

const SummaryDetailPage = () => {
  const location = useLocation();
  const summary = location.state || {};

  return (
    <PageWrapper isScrollable={true}>
      <SummaryDetail summary={summary} />
    </PageWrapper>
  );
};

export default SummaryDetailPage;
