// /* eslint-disable react/prop-types */

// import { useContext, useState,createContext } from "react";


// const utilisContext = createContext()

// export const UtilisContextProvider = ({children}) => {

//   const [isSideBar,setIsSideBar] = useState(false)
//   const [mobileShow,setMobileShow] = useState(false)


//   return <utilisContext.Provider value={{isSideBar,setIsSideBar,mobileShow,setMobileShow}}>
//     {children}
//   </utilisContext.Provider>
// }

// export const useUtilis = () => {
//   const utilisContext = useContext(utilisContext)

//   if(!utilisContext) return null;

//   return utilisContext;
// }