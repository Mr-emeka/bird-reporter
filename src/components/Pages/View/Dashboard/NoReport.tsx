import {NoReportSection} from "./style";
import {NoReportSVG} from "../../../../assets/svg";

const NoReport = () => {
  return <NoReportSection>
    {/*  No report*/}
    <h3>No reports</h3>
    <p>Currently you have no data for the reports to be generated.
      Once you start generating traffic through the Balance application
      the reports will be shown.</p>
    <NoReportSVG/>

  </NoReportSection>
}


export default NoReport;
