import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Input, Button, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Progress, Table, Thead, Tbody, Tr, Th, Td, Avatar } from "@chakra-ui/react";
import { FaPlus, FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";

const Index = () => {
  const [reportCount, setReportCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [turnaroundTime, setTurnaroundTime] = useState(0);
  const [patientSatisfaction, setPatientSatisfaction] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating data update
    setReportCount(reportCount + 5);
    setAccuracy(Math.min(accuracy + 2, 100));
    setTurnaroundTime(Math.max(turnaroundTime - 10, 60));
    setPatientSatisfaction(Math.min(patientSatisfaction + 5, 100));
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Radiologist Report Dashboard
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={8} mb={8}>
        <GridItem>
          <Stat>
            <StatLabel>Total Reports</StatLabel>
            <StatNumber>{reportCount}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {reportCount} this week
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Accuracy</StatLabel>
            <StatNumber>{accuracy}%</StatNumber>
            <Progress value={accuracy} />
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Avg. Turnaround Time</StatLabel>
            <StatNumber>{turnaroundTime} min</StatNumber>
            <Progress value={((120 - turnaroundTime) / 120) * 100} />
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Patient Satisfaction</StatLabel>
            <StatNumber>{patientSatisfaction}%</StatNumber>
            <Progress value={patientSatisfaction} />
          </Stat>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} mb={8}>
        <GridItem>
          <Box borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h2" size="md" mb={4}>
              <FaChartBar /> Reports by Type
            </Heading>
            {/* Bar chart */}
            <Text>CT Scan: 40%</Text>
            <Progress value={40} mb={2} />
            <Text>MRI: 30%</Text>
            <Progress value={30} mb={2} />
            <Text>X-Ray: 20%</Text>
            <Progress value={20} mb={2} />
            <Text>Ultrasound: 10%</Text>
            <Progress value={10} />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h2" size="md" mb={4}>
              <FaChartPie /> Accuracy by Body Part
            </Heading>
            {/* Pie chart */}
            <Text>Brain: 95%</Text>
            <Progress value={95} mb={2} />
            <Text>Chest: 92%</Text>
            <Progress value={92} mb={2} />
            <Text>Abdomen: 90%</Text>
            <Progress value={90} mb={2} />
            <Text>Extremities: 88%</Text>
            <Progress value={88} />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h2" size="md" mb={4}>
              <FaChartLine /> Turnaround Time Trend
            </Heading>
            {/* Line chart */}
            <Text>Week 1: 100 min</Text>
            <Progress value={(100 / 120) * 100} mb={2} />
            <Text>Week 2: 90 min</Text>
            <Progress value={(90 / 120) * 100} mb={2} />
            <Text>Week 3: 80 min</Text>
            <Progress value={(80 / 120) * 100} mb={2} />
            <Text>Week 4: 70 min</Text>
            <Progress value={(70 / 120) * 100} />
          </Box>
        </GridItem>
      </Grid>

      <VStack align="stretch" spacing={8}>
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
              <Tr>
                <Td>
                  <HStack>
                    <Avatar name="John Doe" src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExMTIzMzE2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                    <Text>John Doe</Text>
                  </HStack>
                </Td>
                <Td>CT Scan</Td>
                <Td>2023-06-01</Td>
                <Td>
                  <Text color="green.500">Completed</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <HStack>
                    <Avatar name="Jane Smith" src="https://images.unsplash.com/photo-1534954553104-88cb75be7648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwYXRpZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExMTIzMzE2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                    <Text>Jane Smith</Text>
                  </HStack>
                </Td>
                <Td>MRI</Td>
                <Td>2023-06-02</Td>
                <Td>
                  <Text color="yellow.500">In Progress</Text>
                </Td>
              </Tr>
              {/* Add more rows */}
            </Tbody>
          </Table>
        </Box>

        <Box borderWidth={1} borderRadius="lg" p={4}>
          <Heading as="h2" size="md" mb={4}>
            Add Report
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack align="stretch" spacing={4}>
              <Input placeholder="Patient Name" />
              <Input placeholder="Report Type" />
              <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />}>
                Add Report
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
