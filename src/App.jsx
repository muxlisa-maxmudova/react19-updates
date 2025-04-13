import {useActionState} from "react"
import { updateNameInDB } from "./api"

function App() {
    const [name,actionFunction, isPending] = useActionState(updateName, JSON.parse(localStorage.getItem("name")) || "Anonymous user");
    async function updateName(prevState,formAction) {
        try {
            return await updateNameInDB(formAction.get("name"))
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <p className="username">
                Current user: <span>{name}</span>
            </p>
            {isPending && <p>Loading...</p>}
            <form action={actionFunction}>
                <input
                    type="text"
                    name="name"
                    required
                />
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default App
