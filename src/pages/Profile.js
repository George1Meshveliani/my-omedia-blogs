import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

import fetchUrl from '../functions/fetchUrl';
import api from '../functions/api';

import Blogs from './Blogs';


const Profile = () => {
    const { id } = useParams();

    const userApi = api('/users');

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetchUrl(userApi, userInfo, setUserInfo);
    });

    const userInfoList = userInfo.map(i => {
        if(i.id === +id) {
            return `${i.name} - ${i.username} - ${i.email} - ${i.address.city}`;
        }
    })
    return (
        <div>
            <h1>User Profile: {userInfoList}</h1>
            <br>
            </br>
            <Blogs />
        </div>
    )
}

export default Profile;