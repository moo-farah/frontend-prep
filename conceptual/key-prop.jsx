import React, { useEffect } from 'react';

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

function UserList() {
    // This logs every time the component renders
    console.log("Rendering UserList component");

    return (
        <ul>
            {users.map((user) => {
                console.log('Mapping user:', user.name);
                return (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                );
            })}
        </ul>
    );
}

export default UserList;
// Output: 
// Alice - alice@example.com
// Bob - bob@example.com
// Charlie - charlie@example.com