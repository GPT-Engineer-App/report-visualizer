import React from "react";
import { Box, Heading, Text, Progress } from "@chakra-ui/react";

const ChartCard = ({ title, data }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Heading as="h2" size="md" mb={4}>
        {title}
      </Heading>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Text>
            {item.label}: {item.value}%
          </Text>
          <Progress value={item.value} mb={2} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ChartCard;
