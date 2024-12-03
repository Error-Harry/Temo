import { DASHBOARD, GET_HELP, INTEGRATIONS, PROJECT_SETTINGS } from "@constants/label-keys";
import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <h1 className="header-title">
        <i className="bi bi-grid-fill"></i> {/* Dashboard Icon */}
        {DASHBOARD}
      </h1>
      {/* <div className="user-info">
        <span className="username">
          <i className="bi bi-gear"></i> 
          {PROJECT_SETTINGS}
        </span>
        <span className="username">
          <i className="bi bi-plug"></i> 
          {INTEGRATIONS}
        </span>
        <span className="username">
          <i className="bi bi-question-circle"></i> 
          {GET_HELP}
        </span>
      </div> */}
    </header>
  );
};

export { DashboardHeader };
