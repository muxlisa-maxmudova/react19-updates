import React, {useState} from 'react'
import {updateNameInDB} from "./api.js";
function App(){
    const [input, setInput] = useState('')
    const [name, setName] = useState(
        ()=>JSON.parse(localStorage.getItem('name'))||'Anonymous user'
    )
    function handleChange(e){
        setInput(e.target.value)
    }
    async function handleSubmit(e){
        e.preventDefault()
        try {
            const newName = updateNameInDB(input)
            setName(newName)
            setInput('')
        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <div>
            <p className={'username'}>
                Current User: <span>{name}</span>
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type = "text"
                    required/>
                <button type="submit">
                    Update User
                </button>
            </form>
        </div>
    )
}
export default App
