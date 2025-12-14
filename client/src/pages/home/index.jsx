import { Button, Center } from "@chakra-ui/react";
import { useAuthStore } from "../../store/auth-store";
import NoRecipes from "../../components/no-recipes";
import Spinner from "../../components/spinner";
import useLatestRecipes from "../../hooks/use-latest-recipes";
import EmptyState from "../../components/empty-state";
import { CONTENT_HEIGHT } from "../../utils";
import Recipes from "../../components/recipe-list";

export default function Home() {
  const { isAuthenticated } = useAuthStore();
  const {
    isLoading,
    recipes: latestRecipes,
    error,
    refetch,
  } = useLatestRecipes();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Center height={CONTENT_HEIGHT}>
        <EmptyState
          title="Failed to load latest recipes"
          description="There was an error while fetching the latest recipes. Please try
            again."
        >
          <Button onClick={refetch}>Retry</Button>
        </EmptyState>
      </Center>
    );
  }

  return latestRecipes.length ? (
    <Recipes recipes={latestRecipes} />
  ) : (
    <Center height={CONTENT_HEIGHT}>
      <NoRecipes isAuthenticated={isAuthenticated} />
    </Center>
  );
}
