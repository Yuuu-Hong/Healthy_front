import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('${API_BASE_URL}/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;