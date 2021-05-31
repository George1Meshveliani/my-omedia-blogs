import { useContext } from "react";
import { useParams } from 'react-router';
import { Context } from "../functions/Context";

const User = () => {
    const {id} = useParams();
    const {userInfo, userLoading, userError} = useContext(Context);

    return (
        <div> 
        { userLoading ? (
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
        {userError && <p> Something wrong with API please try again later ... </p>}
    </div>
    )
}

export default User;