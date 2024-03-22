import React, { useState, useEffect } from "react";
import { Box, Heading, Grid, GridItem, VStack } from "@chakra-ui/react";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import ReportTable from "../components/ReportTable";
import AddReportForm from "../components/AddReportForm";

const Dashboard = () => {
  const [reportCount, setReportCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [turnaroundTime, setTurnaroundTime] = useState(0);
  const [patientSatisfaction, setPatientSatisfaction] = useState(0);
  const [reports, setReports] = useState([]);

  useEffect(() => {}, []);

  const handleAddReport = (e) => {
    e.preventDefault();
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Radiologist Report Dashboard
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={8} mb={8}>
        <StatCard label="Total Reports" value={reportCount} helpText={`${reportCount} this week`} />
        <StatCard label="Accuracy" value={`${accuracy}%`} progressValue={accuracy} />
        <StatCard label="Avg. Turnaround Time" value={`${turnaroundTime} min`} progressValue={((120 - turnaroundTime) / 120) * 100} />
        <StatCard label="Patient Satisfaction" value={`${patientSatisfaction}%`} progressValue={patientSatisfaction} />
      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} mb={8}>
        <GridItem>
          <ChartCard
            title={
              <>
                <FaChartBar /> Reports by Type
              </>
            }
            data={[
              { label: "CT Scan", value: 40 },
              { label: "MRI", value: 30 },
              { label: "X-Ray", value: 20 },
              { label: "Ultrasound", value: 10 },
            ]}
          />
        </GridItem>
        <GridItem>
          <ChartCard
            title={
              <>
                <FaChartPie /> Accuracy by Body Part
              </>
            }
            data={[
              { label: "Brain", value: 95 },
              { label: "Chest", value: 92 },
              { label: "Abdomen", value: 90 },
              { label: "Extremities", value: 88 },
            ]}
          />
        </GridItem>
        <GridItem>
          <ChartCard
            title={
              <>
                <FaChartLine /> Turnaround Time Trend
              </>
            }
            data={[
              { label: "Week 1", value: (100 / 120) * 100 },
              { label: "Week 2", value: (90 / 120) * 100 },
              { label: "Week 3", value: (80 / 120) * 100 },
              { label: "Week 4", value: (70 / 120) * 100 },
            ]}
          />
        </GridItem>
      </Grid>

      <VStack align="stretch" spacing={8}>
        <ReportTable reports={reports} />
        <AddReportForm onSubmit={handleAddReport} />
      </VStack>
    </Box>
  );
};

export default Dashboard;
