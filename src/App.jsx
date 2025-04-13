import React, {useActionState } from 'react'
import {updateNameInDB} from "./api.js";

function App () {
    const [state, actionFunction, isPending] = useActionState(updateName, {error:null, name:JSON.parse(localStorage.getItem("name"))||'Anonymous user'})
    async function updateName(prevState,formAction) {
        try{
            const newName = await updateNameInDB(formAction.get("name"))
            return {name: newName, error:null}
        } catch(error){
           return {...prevState, error}
        }
    }
    return (
        <>
            <p className={'username'}> Current user: {state.name} </p>
            {isPending && <p>Loading...</p>}
            <form action={actionFunction}>
                <input
                type="text"
                name="name"
                required
                />
                <button type="submit">
                    Submit
                </button>
                {state.error && <p style={{color:'red'}}>{state.error.message}</p>}
            </form>
        </>
    )
}
export default App

