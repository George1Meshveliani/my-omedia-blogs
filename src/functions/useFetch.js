import { useEffect, useState } from 'react';

const useFetch = url => {

    const [ response, setResponse ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        setLoading(true);
        setResponse([]);
        setError(null);

        fetch(url)
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setResponse(response);
        })
        .catch(error => {
            setLoading(false);
            setError(error);
          });
    },[])

  return [response, loading, error];
}

export default useFetch;