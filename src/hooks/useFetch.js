import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        if (!url) return;

        (async () => {
            try {
                const res = await fetch(url);
            if (res.ok) {
                setData(await res.json());
            } else {
                throw new Error(res.status);
            }
            } catch (error) {
                setError(error);
            }
        })()
    }, [url]);
    return [data, error];
}