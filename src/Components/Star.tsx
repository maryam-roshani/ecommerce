import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";

const Star: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Rating
        name="star-rating"
        value={rating}
        precision={1} // full stars only (use 0.5 for half-stars)
        onChange={(_, newValue) => {
          setRating(newValue);
        }}
        size="large" // "small" | "medium" | "large"
      />
      <Typography variant="body1">
        {rating ? `Your Rating is ${rating}` : "No rating given yet"}
      </Typography>
    </Box>
  );
};

export default Star;
