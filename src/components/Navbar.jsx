import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Radiologist Dashboard
        </Text>
        <Spacer />
        <Link to="/">
          <Text mr={4}>Dashboard</Text>
        </Link>
        <Link to="/reports">
          <Text>Reports</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
