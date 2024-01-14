import { useState, useEffect } from "react";

const UserList = () =>{
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data)=> setUsers(data));
        //con el .then capturamos la respuesta de esa promesa y luego lo transforman en un json
    }, [])

    return(
        <div>
            <h2>Lista de usuarios:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email} - {user.company.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;

