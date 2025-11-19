import { useState, useEffect } from 'react';
import { fetchElephantData } from '../services/elephantService';

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchElephantData();
      setData(result);
    };
    getData();
  }, []);

  return data;
};

export default useFetchData;