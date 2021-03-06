import { useContext, useState } from "react";
import { useParams } from 'react-router';
import { Context } from "../functions/Context";
import  Modal from "./Modal";

import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import '../App.css';



const CommentsComponents = () => {
    const {id} = useParams();
    const {commentsInfo, commentsLoading, commentsError} = useContext(Context);
    
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }
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
                                         <div className="comment">
                                         <h3>commented by: {i.email}</h3>
                                         <strong> {i.body} </strong>
                                         <hr />
                                         </div>
                                    </Alert> 
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    ))}
                        <button onClick={openModal} className="Add-Comment-Button"> Add comment </button>
                        <Modal showModal={showModal} setShowModal={setShowModal} /> 
                </div>
            )}
             {commentsError && <p> Something wrong with API please try again later ... </p>}
        </div>
    )
}

export default CommentsComponents;