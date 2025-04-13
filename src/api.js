export async function updateNameInDB(newName) {
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (newName.toLowerCase().includes('error')){
        throw new Error('Failed to update user name')
    }
    localStorage.setItem('name', JSON.stringify(newName))
    return newName
}