import { Notification } from '../contexts/NotificationContext';

let globalShowNotification: ({
  message,
  type,
}: Notification) => void = () => {};

export const setShowNotification = (
  showFunc: ({ message, type }: Notification) => void,
) => {
  globalShowNotification = showFunc;
};

export const showNotification = ({ message, type }: Notification) => {
  globalShowNotification({ message, type });
};
