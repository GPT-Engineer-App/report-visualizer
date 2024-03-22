import React from "react";
import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const AddReportForm = ({ onSubmit }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Heading as="h2" size="md" mb={4}>
        Add Report
      </Heading>
      <form onSubmit={onSubmit}>
        <VStack align="stretch" spacing={4}>
          <Input placeholder="Patient Name" />
          <Input placeholder="Report Type" />
          <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />}>
            Add Report
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddReportForm;
