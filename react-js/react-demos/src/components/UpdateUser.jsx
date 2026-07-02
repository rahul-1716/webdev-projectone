import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {

    const {updateUser} = useContext(UserContext)
    const [newName, setNewName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newName.trim()){
            updateUser(newName);
            setNewName('')
        }
    }
  return (
    <div>
        <h1>Upadte User Name</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={newName} onChange={(e) => setNewName(e.target.value)}
            placeholder="enter new name" />
            <button type="submit">Update user name</button>
        </form>
    </div>
  )
}

export default UpdateUser