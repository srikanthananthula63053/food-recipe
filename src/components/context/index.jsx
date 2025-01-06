import { createContext, useState } from "react";




export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            console.log(data)

        } catch (e) {
            console.log(e)

        }
    }

    return (
        <GlobalContext.Provider
            value={{ searchParam, setSearchParam, handleSubmit }}
        >{children}</GlobalContext.Provider>
    )
}