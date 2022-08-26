import React from 'react';
import GlobalStyles from "./styles/global";
import {withTheme} from "./hoc/withTheme";
import Dashboard from "./components/Pages/View/Dashboard";
import SEO from "./components/libs/SEO";
import ReduxSuspense from "./components/Pages/ReduxSuspense";

function App() {

  return (<>
    <GlobalStyles/>
    {/*Handling SEO in react using React Helmet*/}
    <SEO description={"Bird report app"} title={"Reporter"}/>
    <ReduxSuspense/>
    <React.Suspense fallback={<div>Loading</div>}>
      <Dashboard/>
    </React.Suspense>
  </>)
}

export default withTheme(App);
