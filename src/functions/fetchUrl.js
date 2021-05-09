const fetchUrl = async (api, initialData, setMaker) => {
    await fetch(api)
    .then(response => response.json())
    .then(initialData => setMaker(initialData));
    return initialData;
  }

export default fetchUrl;