import { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";

import fetchUrl from '../functions/fetchUrl';
import api from '../functions/api';


import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const Blogs = () =>  {
    const [ blogsData, setBlogsData ] = useState([]);
    const [ stack, setStack ] = useState(12);

    const blogsApi = api('/posts');
  
    const loadMore = () => {
      setStack(initialNumberOfStack => initialNumberOfStack + 12);
    }
    useEffect(() => {
        fetchUrl(blogsApi, blogsData, setBlogsData);
    },[]);

    return (
    <div>
          <div>
             <CardGroup>
               {blogsData.slice(0, stack).map(info => (
               <div key={info.userId}> 
               <Card style={{ width: '16rem',  background: 'blue', color: "white" }} >
                  <Card.Img variant="top" src="https://picsum.photos/200/300" />
                  <Card.Body>
                    <Card.Title><strong>{info.title}</strong></Card.Title>
                    <Link to={`/post/${info.userId}`} >
                    <Button variant="light" size="lg" block>
                        Read more
                    </Button>
                    </Link>
                  </Card.Body>
                </Card>
                </div>
                ))}
            </CardGroup>
                <br></br>
                {stack >= blogsData.length ? null : (
                  <Button variant="primary" size="lg" active block onClick={loadMore}>
                        Load more...
                  </Button>
                )}
          </div>
    </div>
    )
}

export default Blogs;