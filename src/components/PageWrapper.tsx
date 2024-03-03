import { ReactNode } from 'react';
import styles from '../styles/PageWrapper.module.css';

interface PageWrapperProps {
  hasPadding?: boolean;
  isCentered?: boolean;
  isScrollable?: boolean;
  children: ReactNode;
}
const PageWrapper = ({
  hasPadding = true,
  isCentered = true,
  isScrollable = false,
  children,
}: PageWrapperProps) => {
  const classArray = [styles.pageWrapper];
  if (hasPadding) classArray.push(styles.hasPadding);
  if (isCentered) classArray.push(styles.isCentered);
  if (isScrollable) classArray.push(styles.isScrollable);
  return <div className={classArray.join(' ')}>{children}</div>;
};

export default PageWrapper;
