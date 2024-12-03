import { combineReducers } from "@reduxjs/toolkit";
import { getCampaign } from "@services/campaign";
import { themeSlice } from "../slice/theme-slice";
import campaignReducer from "../slice/campaign-slice";

export const rootReducer = combineReducers({
  themeConfig: themeSlice.reducer,
  [getCampaign.reducerPath]: getCampaign.reducer,
  campaignConfig: campaignReducer,
});
