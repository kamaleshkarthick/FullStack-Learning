
import { useState, createContext } from 'react'


export const sidebarContext = createContext();

const SidebarProvider = (prop) => {
    const [isOpen, setOpen] = useState()
    const handleClose = () => {
        setOpen(false);
    }
    
  return (
      <>
          <sidebarContext.Provider value={{isOpen,setOpen,handleClose}}>
              {prop.children}
          </sidebarContext.Provider>
      </>
  )
}

export default SidebarProvider;