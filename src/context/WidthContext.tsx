import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

interface PropsWidth {
    children: React.ReactNode;
}

interface WidthContextData {
    windowWidth: number;
    handleNavBar?: () => void;
    navBarOpen?: boolean;
}

const WidthContext = createContext( {} as WidthContextData );

const WidthContextProvider:React.FC<PropsWidth> = ({children}) => {
    
    const [navBarOpen, setNavBarOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
      
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const handleNavBar = () => {
        setNavBarOpen(!navBarOpen)
      }

    return (
        <WidthContext.Provider value={{windowWidth, handleNavBar, navBarOpen}}>
            {children}
        </WidthContext.Provider>
    )
}

export function useWidthContext() {
    const data = useContext(WidthContext);
    if (!data) {
        throw new Error("Cannot use useAuth outside a ThemeProvider");
    }

    return data;
}

export default WidthContextProvider;

