import { createContext } from "react";
import { useState } from "react";


export const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {


const [term, setTerm] = useState('');
const [interTerm, setInterTerm] = useState('');

const handleInterTerm = (event) => {
    console.log(event.target.value)
    setInterTerm(event.target.value)
}

const handleTerm = (event) => {
    console.log(event.target.value)
    setTerm(event.target.value)
}

return(
    <SearchContext.Provider value= {{term, handleTerm, interTerm, handleInterTerm}}>
        {children}
    </SearchContext.Provider>
)

}

