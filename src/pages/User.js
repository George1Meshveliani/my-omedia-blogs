import React from  'react';
import { useParams } from 'react-router';

const User = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User {id}</h1>  <h1>User</h1>
        </div>
    )
}

export default User;