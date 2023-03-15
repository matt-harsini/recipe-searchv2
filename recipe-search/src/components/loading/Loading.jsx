import React from "react";
import { CircularProgress, Flex } from "@chakra-ui/react";

function Loading() {
  return (
    <Flex bg="#f1f3f5" justifyContent="center" alignItems="center" minH="100vh">
      <CircularProgress isIndeterminate color="#212529" />
    </Flex>
  );
}

export default Loading;
