import { useState } from 'react';

/**
 * e.g. GET, url="https://example.com"
 *    const { get, loading } = useFetch(); 
 *    get('https://example.com')
 *    .then(data => console.log(data))
 *    .catch(error => console.log(error));
 * 
 * @returns get method, post method, loading state
 */

// TODO: delete this file
export const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const get = (url: string) => {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(resopnse => resopnse.json())
      .then(data => {
        if (!data) {
          setLoading(false);
          return reject(data);
        }
        setLoading(false);
        resolve(data);
      })
      .catch(error => {
        setLoading(false);
        reject(error);
      });
    });
  };

  const post = (url: string, body: Object) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        if (!data) {
          setLoading(false);
          return reject(data);
        }
        setLoading(false);
        resolve(data);
      })
      .catch(error => {
        setLoading(false);
        reject(error);
      });
    });
  };

  return { get, post, loading };
};