import React ,{ useState, createContext } from 'react'


export const sidebarContext = createContext()

const SidebarProvider = (childern) => {
    const [isOpen, setOpen] = useState()
    const handleClose = () => {
        setOpen(false)
    }
    
  return (
      <>
          <sidebarContext.Provider value={{isOpen,setOpen,handleClose}}>
              {childern}
          </sidebarContext.Provider>
      </>
  )
}

export default SidebarProvider;