import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

import fetchUrl from '../functions/fetchUrl';
import api from '../functions/api';

const Post = () => {
  
    const { id } = useParams();

    const postsApi = api('/posts');
    const userApi  = api('/users');
    const commentsApi = api('/comments');

    const [ data, setData ] = useState([]);
    const [ userData, setUserData ] = useState([]);
    const [ commentsData, setCommentsData ] = useState([]);

    useEffect(() => {
        fetchUrl(postsApi, data, setData);
        fetchUrl(userApi, userData, setUserData);
        fetchUrl(commentsApi, commentsData, setCommentsData);
      },[]);


     const userPostTitle = data.map(i => {
         if(i.id === +id) {
             return `${i.userId} - ${i.title} -`;
         }
     });

     const content = data.map(i => {
       if(i.id === +id) {
         return `${i.body}`;
       }
     })

     const username = userData.map(i => {
      if(i.id === +id) {
        return `${i.username}`;
      }
    })

    const comments = commentsData.map(i => {
      if(i.postId === +id) {
        return `${i.body}`;
      }
    })
    return (
            <div>
              <h1>{userPostTitle}</h1>
              <h2>{username}</h2>
              <img src="https://picsum.photos/200/300"/>
              <h1>content</h1>
              <section>
                {content}
              </section>
              <h1>comments</h1>
              <section>
                {comments}
              </section>
            </div>
        )
}

export default Post;