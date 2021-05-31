import { useParams } from 'react-router';
import api from '../functions/api';

import Blogs from './Blogs';
import useFetch from '../functions/useFetch';


const Profile = () => {
    const { id } = useParams();

    const userApi = api('/users');
    const [ userInfo, loading, error ] = useFetch(userApi);

    return (
        <div> 
            { loading ? (
                <p> Please wait ...</p>
            ) : (
                <div className="User-Profile"> 
                    {userInfo.map(i => (
                        <div key={i.id}>
                            { i.id === +id ? (
                                <div>
                                    <strong>
                                    <li> {i.name} </li>
                                    <li> {i.username} </li>
                                    <li> {i.email} </li>
                                    <li> {i.address.city} </li>
                                    </strong>
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    ))}
                 </div>
            )
            }
            {error && <p> Something wrong with API please try again later ... </p>}
            <Blogs />
        </div>
    )
}


export default Profile;