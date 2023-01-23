/* eslint-disable no-throw-literal */
import { useState, useEffect } from "react";
import { ErrorData } from '../interfaces/interfaces';



export const useFetch = (url: string, param = '') => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<ErrorData | null>(null);

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const fetchUrl = `${url}/${param}`;
        let res = await fetch(fetchUrl);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error: any) {
        console.log(error);
        setError(error);
        setIsPending(true);
      }
    };

    getData(url);
  }, [url,param]);

  return { data, isPending, error };
};
