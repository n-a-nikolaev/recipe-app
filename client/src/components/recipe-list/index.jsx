import React from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function Recipes({ recipes }) {
  return (
    <Box>
      <Heading size="lg" mb={4}>
        Latest Recipes
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {recipes.map((recipe, index) => {
          const key = recipe.id ?? recipe._id ?? `${recipe.title}-${index}`;
          return (
            <Card key={key}>
              <CardBody>
                <Heading size="md">
                  {recipe.title ?? "Untitled recipe"}
                </Heading>
                {recipe.description ? (
                  <Text mt={2} color="gray.600">
                    {recipe.description}
                  </Text>
                ) : null}
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
