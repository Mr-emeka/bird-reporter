import MainDashboardLayout from "../../../layouts/main";
import {DashboardHeader, NoReportSection} from "./style";
import Button from "../../../libs/Button";
import ButtonState from "../../../libs/Button/types/ButtonState";
import Select from "../../../libs/Input/Select";
import {NoReport} from "../../../../assets/svg";

const Dashboard = () => {
  return <MainDashboardLayout>
    <DashboardHeader>
      <div>
        <h1>Report</h1>
        <p>Easily generate a report of your transactions</p>
      </div>

      {/*  Button section*/}
      <div>
        <Select name={"project"} placeholder={"All Projects"} options={[{value: "1", text: "Project 1"}]}/>
        <Select name={"gateway"} placeholder={"All Gateways"} options={[{value: "1", text: "Gateway 1"}]}/>
        <Select name={"Project"} placeholder={"All Projects"} options={[{value: "1", text: "Project 1"}]}/>
        <Select name={"Project"} placeholder={"All Projects"} options={[{value: "1", text: "Project 1"}]}/>
        <Button variant={ButtonState.PRIMARY} padding={"0.5rem 0.625rem"}>Generate Report</Button>
      </div>
    </DashboardHeader>
    {/**/}
    <NoReportSection>
      {/*  No report*/}
      <h3>No reports</h3>
      <p>Currently you have no data for the reports to be generated.
        Once you start generating traffic through the Balance application
        the reports will be shown.</p>
      <NoReport/>

    </NoReportSection>
  </MainDashboardLayout>
}


export default Dashboard;
