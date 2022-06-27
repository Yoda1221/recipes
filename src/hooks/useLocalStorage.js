import { useState } from 'react'
Ô
const useLocalStorage = (key, initValue) => {
    const [storedVal, setStoredVal] = useState(() => {
        if (typeof window === "undefined") return initValue
        try {
            //** GET FROM localStorage BY key
            const item = window.localStorage.getItem(key)
            //** PARSE STORED JSON OR IS NONE RETURN initValue
            return item ? JSON.parse(item) : initValue
        } catch (error) {
            //!! IF ERROR ALSO RETURN initValue
            console.error("🚀 useLocalStorage.js ~ line 9 ~ const[storedVal,setStoredVal]=useState ~ error", error)
            return initValue
        }
    })

    //** RETURN A WRAPPED VERSIONI OF useState's SETTER FUNCTION THAT ...
    //** ... PERSISTS THE NEW VALUE TO localStorage
    const setValue = (value) => {
        try {
            //** ALLOW VALUE TO BE A FUNCTION SO WE HAVE SAME API ASA useState
            const valueToStore = value instanceof Function ? value(storedVal) : value
            //** SAVE TO STATE
            setStoredVal(valueToStore)
            //** SAVE TO LOCALSTOREAGE
            if(typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            //!! A MORE ADVENCED IMPLEMENTATION WOULD HANDLE THE ERROR CASE
            console.log("🚀 useLocalStorage.js ~ line 19 ~ setValue ~ error", error)
        }
    }
  return [storedVal, setValue ]
}

export default useLocalStorage