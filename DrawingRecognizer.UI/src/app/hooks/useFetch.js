// useFetch.js
import { useState } from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (body) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                ...options,
                body: body,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return [ fetchData, data, error, loading,  ];
};

export default useFetch;