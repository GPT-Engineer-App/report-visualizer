import React from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Avatar, HStack, Text } from "@chakra-ui/react";

const ReportTable = ({ reports }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Heading as="h2" size="md" mb={4}>
        Recent Reports
      </Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Patient</Th>
            <Th>Type</Th>
            <Th>Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports.map((report, index) => (
            <Tr key={index}>
              <Td>
                <HStack>
                  <Avatar name={report.patientName} src={report.patientAvatar} />
                  <Text>{report.patientName}</Text>
                </HStack>
              </Td>
              <Td>{report.type}</Td>
              <Td>{report.date}</Td>
              <Td>
                <Text color={report.status === "Completed" ? "green.500" : "yellow.500"}>{report.status}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ReportTable;
