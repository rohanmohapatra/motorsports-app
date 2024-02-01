import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from 'react';

interface DrawerConfig {
    home: boolean;
    f1: boolean;
    hyper: boolean;
    gt3: boolean;
    fe: boolean;
}

const initialDrawerConfig: DrawerConfig = {
    home: false,
    f1: false,
    hyper: false,
    gt3: false,
    fe: false
};

const DrawerContext = createContext<{
    initialDrawerConfig: DrawerConfig;
    config: DrawerConfig;
    setConfig: Dispatch<SetStateAction<DrawerConfig>>;
} | null>(null);

interface DrawerContextProviderProps {
    children: ReactNode;
}

export const DrawerContextProvider = ({
    children
}: DrawerContextProviderProps) => {
    const [config, setConfig] = useState<DrawerConfig>({
        ...initialDrawerConfig,
        home: true
    });

    return (
        <DrawerContext.Provider
            value={{ initialDrawerConfig, config, setConfig }}
        >
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => {
    const context = useContext(DrawerContext);

    if (!context) {
        throw new Error(
            'useDrawer has to be used within <DrawerContextProvider>'
        );
    }

    return context;
};
