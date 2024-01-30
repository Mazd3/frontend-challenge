import { useEffect, useState } from "react";
import { Cat } from "../types/Cat";

export function useInfinityScroll(limit: number = 20) {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      const data = await res.json();
      setCats((cats) => [...cats, ...data]);
      setPage((page) => page + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleEnd() {
    if (loading) return;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200
    ) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (window.innerHeight > document.documentElement.offsetHeight) {
      handleEnd();
    }
    window.addEventListener("scroll", handleEnd);
    return () => window.removeEventListener("scroll", handleEnd);
  }, [loading]);

  return { cats, loading };
}
