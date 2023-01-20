/* eslint-disable no-throw-literal */
import { useState, useEffect } from "react";

type ErrorState = {
  err: boolean;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<ErrorState|null>(null);

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        console.log(err);
        setIsPending(true);
        setError({ err: true });
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
