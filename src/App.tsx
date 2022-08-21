import React from 'react';
import './App.css';
import GlobalStyles from "./styles/global";
import {withTheme} from "./hoc/withTheme";
import Dashboard from "./components/Pages/View/Dashboard";
import SEO from "./components/libs/SEO";

function App() {
  return (<>
    <GlobalStyles/>
    {/*Handling SEO in react using React Helmet*/}
    <SEO description={"Bird report app"} title={"Reporter"}/>

    <Dashboard/>
  </>)
}

export default withTheme(App);
