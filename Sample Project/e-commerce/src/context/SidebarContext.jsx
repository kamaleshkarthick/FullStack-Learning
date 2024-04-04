
import { useState, createContext } from 'react'


export const sidebarContext = createContext();

const SidebarProvider = ({children}) => {
    const [isOpen, setOpen] = useState()
    const handleClose = () => {
        setOpen(false);
    }
    
  return (
      <>
          <sidebarContext.Provider value={{isOpen,setOpen,handleClose}}>
              {children}
          </sidebarContext.Provider>
      </>
  )
}

export default SidebarProvider;