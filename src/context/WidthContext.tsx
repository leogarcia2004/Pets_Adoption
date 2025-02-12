import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

interface PropsWidth {
    children: React.ReactNode;
}

interface WidthContextData {
    windowWidth: number;
    handleNavBar?: () => void;
    navBarOpen?: boolean;
    handleModalDonate?: () => void;
    modalDonateOpen?: boolean;
    handleModalAdopt?: () => void;
    modalAdoptOpen?: boolean;
}

const WidthContext = createContext( {} as WidthContextData );

const WidthContextProvider:React.FC<PropsWidth> = ({children}) => {
    
    const [navBarOpen, setNavBarOpen] = useState(false)
    const [modalDonateOpen, setModalDonateOpen] = useState(false)
    const [modalAdoptOpen, setModalAdoptOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
      
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const handleNavBar = () => {
        setNavBarOpen(!navBarOpen)
      }

      const handleModalDonate = () => {
        setModalDonateOpen(!modalDonateOpen)
      }

        const handleModalAdopt = () => {
            setModalAdoptOpen(!modalAdoptOpen)
        }

    return (
        <WidthContext.Provider value={{windowWidth, handleNavBar, navBarOpen, handleModalDonate, modalDonateOpen, handleModalAdopt, modalAdoptOpen}}>
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

