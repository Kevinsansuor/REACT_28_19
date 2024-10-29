import { Box, Typography } from "@mui/material";
import React from "react";

export default function CategoryHeader({ selectedCategory }) {
  console.log("Rendering CategoryHeader component");
  console.log(`Selected category: ${selectedCategory}`);
  return (
    <Box>
      {selectedCategory && (
        <Box sx={{ padding: 2, backgroundColor: 'red' }}>
          <Typography variant="subtitle1">Categoría seleccionada: {selectedCategory}</Typography>
        </Box>
      )}
    </Box>
  );
}

