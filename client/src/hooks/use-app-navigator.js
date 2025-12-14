import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// TODO: Check if this could be achieved only with one method: goTo(path, options)
export default function useAppNavigator() {
  const navigate = useNavigate();

  const goToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const goToAddRecipe = useCallback(() => {
    navigate("/recipes/add");
  }, [navigate]);

  const goToEditRecipe = useCallback(
    (id) => {
      navigate(`/recipes/edit/${id}`);
    },
    [navigate]
  );

  const goToFavoriteRecipes = useCallback(() => {
    navigate(`/recipes/favorites`);
  }, [navigate]);

  const goToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return {
    goToHome,
    goToAddRecipe,
    goToEditRecipe,
    goToFavoriteRecipes,
    goToLogin,
  };
}
