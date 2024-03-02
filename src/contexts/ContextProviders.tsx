

import { ReactNode } from 'react';
import { NotificationProvider } from './NotificationContext';
import { UserProvider } from './UserContext';

const ContextProviders = ({ children }: { children: ReactNode }) => {
    return (
        <UserProvider>
            <NotificationProvider>
                {children}
            </NotificationProvider>
        </UserProvider>
    );
};

export default ContextProviders;