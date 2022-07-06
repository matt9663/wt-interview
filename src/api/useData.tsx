import { useEffect, useState } from "react";

export function useData(url: string) {
  const [result, setResult]= useState(null);
  useEffect(() => {
      let ignore = false;
      fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!ignore) {
          setResult(data);
        }
      });
      return () => {
        ignore = true;
      }
  },[url])
  return result;
}; 