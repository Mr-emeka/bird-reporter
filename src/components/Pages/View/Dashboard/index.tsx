import MainDashboardLayout from "../../../layouts/main";
import {DashboardHeader, ReportStyle, ReportHeader} from "./style";
import Button from "../../../libs/Button";
import ButtonState from "../../../libs/Button/types/ButtonState";
import Select from "../../../libs/Input/Select";
import Breakdown from "../../../libs/GraphAreaComponents/breakdown";
import Graph from "../../../libs/GraphAreaComponents/graph";
import {useEffect, useState} from "react";
import TotalCard from "../../../libs/GraphAreaComponents/totalCard";
import Table from "../../../libs/Table";
import {useDispatch, useSelector} from "react-redux";
import {generateReportAsync, getGatewaysAsync, getProjectsAsync} from "../../../../redux/modules/report/actions";
import {RootState} from "../../../../redux";
import FormInput from "../../../libs/Input/FormInput";
import {GenerateReportDataProps} from "../../../../services/ReportService";
import NoReport from "./NoReport";
import {dashboardTableCol} from "../../../libs/Table/data";
import {selectedGateway, selectedProject} from "../../../../helpers";

const Dashboard = () => {
  const dispatch = useDispatch<any>();
  const {projects, gateways, reports, generatedReport} = useSelector((state: RootState) => state.report);
  const [value, setValue] = useState<GenerateReportDataProps>({from: "", to: '', gatewayId: '', projectId: ''})
  const [showTable, setShowTable] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getProjectsAsync())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(getGatewaysAsync())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(generateReportAsync(value))
    //eslint-disable-next-line
  }, [])

  const handleInputChange = (e: any) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const handleGenerateReport = () => {
    dispatch(generateReportAsync(value, true))
  }

  const generatedProjectSelect = projects.map((project) => {
    return {value: project.projectId, text: project.name}
  })

  const generatedGatewaySelect = gateways.map((gateway) => {
    return {value: gateway.gatewayId, text: gateway.name}
  })

  return <MainDashboardLayout>
    <DashboardHeader>
      <div>
        <h1>Report</h1>
        <p>Easily generate a report of your transactions</p>
      </div>

      {/*  Button section*/}
      <div>
        <Select name={"projectId"} placeholder={"All Projects"}
                options={generatedProjectSelect} onChange={handleInputChange}/>
        <Select name={"gatewayId"} placeholder={"All Gateways"} options={generatedGatewaySelect}
                onChange={handleInputChange}/>
        <FormInput type={"date"} value={value.from} name={"from"} placeholder={"From Date"}
                   handleChange={handleInputChange}/>
        <FormInput type={"date"} value={value.to} name={"to"} placeholder={"To Date"} handleChange={handleInputChange}/>
        <Button variant={ButtonState.PRIMARY} padding={"0.5rem 0.625rem"} onClick={handleGenerateReport}>Generate
          Report</Button>
      </div>
    </DashboardHeader>

    {reports.length > 0 && <ReportStyle generatedReport={generatedReport}>
      <div>
        <h4>
          {value.projectId === "" ? "All Projects" : selectedProject(projects, value.projectId)} | {value.gatewayId === "" ? "All Gateways" : selectedGateway(gateways, value.gatewayId)}
        </h4>
        {/*  Table area*/}
        <div>
          <div>
            {projects.filter(project => project.projectId.includes(value.projectId)).map((project, key) => {
              return <>
                <ReportHeader onClick={() => setShowTable(showTable === key ? null : key)}>
                  <h5>{project.name}</h5>
                  <h3>TOTAL: {reports.filter(report => report.projectId === project.projectId)
                    .reduce((total, value) => {
                      return total + Math.round(value.amount);
                    }, 0)}
                  </h3>
                </ReportHeader>
                {showTable === key &&
                  <>
                    <Table
                      columns={dashboardTableCol}
                      dataSource={
                        reports.filter(report => {
                          return report.projectId.includes(project.projectId) || report.gatewayId.includes(value.gatewayId)
                        }).map((report, index) => {
                          return {key: index, ...report}
                        })}
                      evenStyled={true}/>
                  </>
                }
              </>
            })}
          </div>

        </div>

      </div>
      <div>
        <Breakdown data={[{value: "Project 1", color: '#FFC107'}, {value: "Project 2", color: '#6497B1'}]}/>
        <Graph/>
        <TotalCard text="TOTAL" amount={reports.filter(report => report.projectId.includes(value.projectId))
          .reduce((total, value) => {
            return total + Math.round(value.amount);
          }, 0).toString()}/>
      </div>
    </ReportStyle>
    }


    {reports.length <= 0 && <NoReport/>}

  </MainDashboardLayout>
}


export default Dashboard;
