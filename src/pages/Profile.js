import { useParams } from 'react-router';


const Profile = () => {
    const { id } = useParams();
    return (        
        <div>
            <h1>Profile {id}</h1>
        </div>
    )
}

export default Profile;