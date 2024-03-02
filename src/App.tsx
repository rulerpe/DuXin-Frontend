import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import ContextProviders from './contexts/ContextProviders';
import Layout from './components/Layout';
import 'normalize.css';
import './utils/i18n';

const App = () => {
  return (
    <ContextProviders >
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ContextProviders >
  );
};

export default App;
