import { FaPlus } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import EmptyState from "../empty-state";

export default function NoRecipes({ isAuthenticated }) {
  const description = isAuthenticated
    ? "Click the plus button to add a new recipe."
    : "Please log in to add new recipes.";

  return (
    <EmptyState
      title="There are no recipes added yet."
      description={description}
      icon={<FaPlus />}
    >
      {isAuthenticated ? (
        <Button>
          <FaPlus /> Add recipe
        </Button>
      ) : (
        <Button>Login</Button>
      )}
    </EmptyState>
  );
}
