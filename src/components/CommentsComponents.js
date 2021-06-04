import { useContext } from "react";
import { useParams } from 'react-router';
import { Context } from "../functions/Context";

import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import '../App.css';



const CommentsComponents = () => {
    const {id} = useParams();
    const {commentsInfo, commentsLoading, commentsError} = useContext(Context);
    
    return (
        <div>
            { commentsLoading ? (
                <div> 
                    <p> Please wait ... </p>
                </div>
            ) : (
                <div> 
                    { commentsInfo.map(i => (
                        <div key={i.id}>
                            { i.postId === +id ? (
                                <div>
                                     <Alert variant='info'>
                                         <h3>commented by: {i.email}</h3>
                                         <strong> {i.body} </strong>
                                    </Alert> 
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                        
                    ))}
                        <button className="Add-Comment-Button"> Add comment </button>
                </div>
                
            )}
             {commentsError && <p> Something wrong with API please try again later ... </p>}
        </div>
    )
}

export default CommentsComponents;