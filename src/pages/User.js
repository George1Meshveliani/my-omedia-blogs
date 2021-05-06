import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const User = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setData([]);
        setError(null);

        loadData()
        .catch(error => {
          setLoading(false);
          setError(error);
        });
      },[]);
    
      const loadData = async () =>  {
        await fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          setData(data)
        });
      }

     console.log(id);
     const g = data.map(i => {
         if(i.id === +id) {
             return `${i.id} - ${i.name}`;
         }
     });
      console.log(g);
    //   console.log(data);

        return (
            <div>
                    <h1>{g}</h1>
            </div>
        )
}

export default User;