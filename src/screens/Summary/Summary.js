import React from "react";
import { useGetCampaignsQuery } from "@services/campaign";
import { CircularProgress } from "@mui/material";
import "./Summary.css";

const Summary = () => {
  const { data: campaignData, error, isLoading } = useGetCampaignsQuery(
    "a7e26b3a-5812-4fd2-aad6-783c63cad4e9"
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <p>Failed to fetch campaign data</p>;
  }

  console.log("data", campaignData);

  return (
    <div>
      <h1>Summary</h1>
      {campaignData?.map((campaign, index) => (
        <div key={index} className="container">
          <h2>{campaign?.Name}</h2>
          <div className="summary-details">
            <p>Codes Count: {campaign?.codescount || "N/A"}</p>
            <p>Code Redemption Limit: {campaign?.redemptionLimit || "N/A"}</p>
            <p>
              Auto Update: {campaign.autoupdate ? "Turned on" : "Turned off"}
            </p>
            <p>Time Frame:{campaign.timeFrame || "Not defined"} </p>
            <p>Discount Type: {campaign?.discountType || "N/A"}</p>
            <p>Discount Value: {campaign?.discountValue || "N/A"}</p>
            <p>Discount Effect:{campaign?.discountEffect || "N/A"}</p>
            <p>Validation Rules: {campaign?.validationRule || "N/A"}</p>
            <p>Metadata: {campaign?.metadat?.length || "0"} attributes </p>
            <p>Category: {campaign?.category || "-"} </p>
          </div>
          <div className="container">
            <h2>Discounted / Excluded products</h2>
            <div className="summary-details">
              <p>Included:{campaign?.includedProducts || "N/A"}</p>
              <p>Excluded:{campaign?.excludedProducts || "N/A"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Summary };
