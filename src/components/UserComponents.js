import { useContext } from "react";
import { useParams } from 'react-router';
import { Context } from "../functions/Context";

import { Link } from 'react-router-dom';


const UserComponents = () => {
    const {id} = useParams();
    const {userInfo, userLoading, userError} = useContext(Context);



    return (
        <div>
            { userLoading ? (
                <div> 
                    <p> Please wait ... </p>
                </div>
            ) : (
                <div> 
                    { userInfo.map(i => (
                        <div key={i.id}>
                            { i.id === +id ? (
                                <div>
                                    <Link to={`/profile/${id}`} >
                                        <section className="username">
                                        <button>
                                            Username: {i.username}
                                        </button>
                                        </section>
                                    </Link>                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    ))}
                </div>
            )}
             {userError && <p> Something wrong with API please try again later ... </p>}
        </div>
    )
}

export default UserComponents;