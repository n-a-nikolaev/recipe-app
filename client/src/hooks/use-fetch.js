import { useCallback, useEffect, useRef, useState } from "react";

export default function useFetch(fetcher, { immediate = true, deps = [], initialData = null } = {}) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(immediate);
  const abortRef = useRef(null);
  const mountedRef = useRef(true);

  const run = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoading(true);
    setError(null);

    try {
      const result = await fetcher({ signal: controller.signal });
      if (mountedRef.current) {
        setData(result);
      }
      return result;
    } catch (err) {
      if (controller.signal.aborted) {
        return null;
      }
      if (mountedRef.current) {
        setError(err);
      }
      throw err;
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [fetcher]);

  useEffect(() => {
    if (immediate) {
      run();
    }
    return () => {
      mountedRef.current = false;
      abortRef.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, immediate, ...deps]);

  return { data, error, isLoading, refetch: run };
}
