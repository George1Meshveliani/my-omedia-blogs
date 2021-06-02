import { useContext } from "react";
import { useParams } from 'react-router';
import { Context } from "../functions/Context";

import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


const PostComponents = () => {
    const {id} = useParams();
    const {blogsInfo, blogsLoading, blogsError} = useContext(Context);

    //  const userPostTitle = blogsInfo.map(i => {
    //      if(i.id === +id) {
    //          return `${i.title}`;
    //      }
    //  });
    // map is not defined needs to be cleared ... 
    //  const content = blogsInfo.map(i => {
    //    if(i.id === +id) {
    //      return `${i.body}`;
    //    }
    //  })

    return (
        <div>
            { blogsLoading ? (
                <div> 
                    <p> Please wait ... </p>
                </div>
            ) : (
                <div> 
                    { blogsInfo.map(i => (
                        <div key={i.id}>
                            { i.id === +id ? (
                                <div> 
                                <h1 className="title">Title: {i.title}</h1>
                                <Alert variant='light'>
                                    <img src="https://picsum.photos/200/300"/>
                                    <h1>content</h1>
                                    {i.body}
                                </Alert> 
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    ))} 

                    {/* <h1 className="title">Title: {userPostTitle}</h1>
                    <Alert variant='light'>
                        <img src="https://picsum.photos/200/300"/>
                        <h1>content</h1>
                        {content}
                        </Alert>  */}
                </div>
            )}
             {blogsError && <p> Something wrong with API please try again later ... </p>}
        </div>
    )
}

export default PostComponents;