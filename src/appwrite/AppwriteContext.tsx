import React, {createContext,useState,type FC,type PropsWithChildren,} from 'react';

import AppwriteService from './service';

// Define Context Type
type AppContextType = {
    appwrite: AppwriteService;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
};

// Create Context
export const AppwriteContext = createContext<AppContextType>({
    appwrite: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {

    // Create Appwrite service instance
    const [appwrite] = useState(() => new AppwriteService());

    // Manage login state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Data to share
    const defaultValue = {
        appwrite,
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <AppwriteContext.Provider value={defaultValue}>
            {children}
        </AppwriteContext.Provider>
    );
};

export default AppwriteProvider;