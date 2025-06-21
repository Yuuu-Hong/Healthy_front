import React, { useState, useEffect } from 'react';

const UserForm = ({ userId, onSubmit }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        age: '',
        // Add other fields as necessary
    });

    useEffect(() => {
        if (userId) {
            // Fetch user data for editing
            fetch(`/api/users/${userId}`)
                .then(response => response.json())
                .then(data => setUserData(data))
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">{userId ? 'Update User' : 'Create User'}</button>
        </form>
    );
};

export default UserForm;