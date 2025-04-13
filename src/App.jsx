import React, {useState} from 'react'
import {updateNameInDB} from "./api.js";
const App = () => {
    const [name, setName] = useState(
        ()=>JSON.parse(localStorage.getItem('name'))||'Anonymous user'
    )
    async function handleSubmit(formAction) {
        try{
            const newName = updateNameInDB(formAction.get("name"));
            setName(newName);
        }
        catch(error){
            console.error(error);
        }
    }
    return (
        <>
            Current User: {name}
            <form action={handleSubmit}>
                <input
                type="text"
                name="name"
                />
                <button type="submit">
                    submit
                </button>
            </form>
        </>
    )
}
export default App

