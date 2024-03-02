import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNotification } from "../contexts/NotificationContext";
import styles from "../styles/NotificationBanner.module.css";

const NotificationBanner = () => {
    const { notification, hideNotification } = useNotification();
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                hideNotification();
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [notification, hideNotification])



    return (
        <div className={`${styles.notificationBanner} ${styles[notification?.type || '']} ${notification?.message ? styles.visible : ''}`}>
            <span className={styles.notificationMessage}>{notification?.message}</span>
            <button className={styles.notificationCloseBtn} onClick={hideNotification}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
        </div >
    )
}

export default NotificationBanner