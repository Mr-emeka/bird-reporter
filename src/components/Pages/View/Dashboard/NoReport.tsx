import {NoReportSection} from "./style";
import {NoReportSVG} from "../../../../assets/svg";
import {withTheme} from "../../../../hoc/withTheme";

const NoReport = () => {
  return <NoReportSection>
    {/*  No report*/}
    <h3>No reports</h3>
    <p data-testid={'message'}>Currently you have no data for the reports to be generated.
      Once you start generating traffic through the Balance application
      the reports will be shown.</p>
    <NoReportSVG data-testid={"no-report-svg"}/>

  </NoReportSection>
}


export default withTheme(NoReport);
