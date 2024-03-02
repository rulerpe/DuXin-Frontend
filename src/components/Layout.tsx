import { ReactNode } from 'react';
import Header from './Header';
import NotificationBanner from "./NotificationBanner";
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <NotificationBanner />
      <div className={styles.content}>{children}</div>

    </div>
  );
};

export default Layout;
