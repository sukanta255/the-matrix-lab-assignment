import React from "react";
import {  Box,Grid,Skeleton } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} gap={3} w={"100%"} mt={[6, null, 10]}>
      {Array.from({ length: 8 }, (_, index) => (
        <Box key={index} p={4} borderWidth="2px" borderRadius="md" boxShadow="md">
          <Skeleton height="15px" width="40%" m={3} />
          <hr />
          <Skeleton height="10px" width="70%" m={3} />
          <Skeleton height="10px" width="80%" m={3} />
          <Skeleton height="10px" width="70%" m={3} />
          <Skeleton height="10px" width="90%" m={3} />
        </Box>
      ))}
    </Grid>
  );
};
export default Loading;
