import { createContext, useContext, useState, ReactNode } from "react";
import { setShowNotification } from "../services/notificationService";

export interface Notification {
    message: string;
    type: 'error' | 'success'
}

interface NotificationContextType {
    notification: Notification | null;
    showNotification: ({ message, type }: Notification) => void; // TODO: type 
    hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [notification, setNotification] = useState<Notification | null>(null)

    const showNotification = ({ message, type }: Notification) => {
        console.log('showNotification', message)
        setNotification({ message, type })
    }
    setShowNotification(showNotification)

    const hideNotification = () => {
        setNotification(null)
    }

    return (
        <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
            {children}
        </ NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotification must be used with in a NotificationProvider')
    }
    return context
}