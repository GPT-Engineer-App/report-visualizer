import React from "react";
import { GridItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Progress } from "@chakra-ui/react";

const StatCard = ({ label, value, helpText, progressValue }) => {
  return (
    <GridItem>
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        {helpText && (
          <StatHelpText>
            <StatArrow type="increase" />
            {helpText}
          </StatHelpText>
        )}
        {progressValue && <Progress value={progressValue} />}
      </Stat>
    </GridItem>
  );
};

export default StatCard;
