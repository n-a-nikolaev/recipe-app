import requestToApi from "../services/request-to-api";
import useFetch from "./use-fetch";

export default function useLatestRecipes() {
  const {
    data: recipes,
    isLoading,
    error,
    refetch,
  } = useFetch(
    // fetcher receives { signal }
    async ({ signal }) => {
      const { data } = await requestToApi.get("/recipes/latest", { signal });
      return data;
    },
    { immediate: true, initialData: [], deps: [] }
  );

  return { recipes, isLoading, error, refetch };
}
