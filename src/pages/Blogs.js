import { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";

// import fetchUrl from '../functions/fetchUrl';
import api from '../functions/api';
import useFetch from '../functions/useFetch';


import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const Blogs = () =>  {
    const blogsApi = api('/posts');
    const [ response, loading, error ] = useFetch(blogsApi);

    const [ stack, setStack ] = useState(12);
    
    const loadMore = () => {
      setStack(initialNumberOfStack => initialNumberOfStack + 12);
    }

    return (
    <div>
          <div>
            { loading ? (
              <p>
                Please wait...
              </p>
            ) : (
              <div>
                  <CardGroup>
               {response.slice(0, stack).map(info => (
               <div key={info.userId}> 
               <Card style={{ 
                  width: '16rem',  
                  background: 'blue', 
                  color: "white",
                  padding: '2px',
                  margin: '3px'
                  }} >
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
                {stack >= response.length ? null : (
                  <Button variant="primary" size="lg" active block onClick={loadMore}>
                        Load more...
                  </Button>
                )} 
                {error && <p>Something is wrong with API, please try again later</p>}
              </div>
            )}
          </div>
    </div>
    )
}

export default Blogs;