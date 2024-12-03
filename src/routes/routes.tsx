import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteOptions } from '../types/route-options';
import { ROUTE_ABOUT, ROUTE_CAMPAIGN_SUCCESS, ROUTE_CREATE_CAMPAIGN, ROUTE_DISCOUNT_VALUE, ROUTE_MAIN, ROUTE_SUMMARY, ROUTE_TIMEFRAME } from '@constants/route-keys';
import { About } from '@screens/About';
import { Dashboard } from '@screens/Dashboard';
import { CreateCampaign, CampaignSuccess } from '@screens/Campaign';
import { Timeframe } from '@screens/Timeframe';
import { DiscountValue } from '@screens/Discount';
import { Summary } from '@screens/Summary';
import { Sidebar } from '@components/SideBar';
import { DashboardHeader } from '@components/Header';
import '../App.css';

const routes: RouteOptions[] = [
  {
    id: 1,
    path: ROUTE_MAIN,
    component: <Dashboard />,
  },
  {
    id: 2,
    path: ROUTE_ABOUT,
    component: <About />,
  },
  {
    id: 3,
    path: ROUTE_CREATE_CAMPAIGN,
    component: <CreateCampaign />,
  },
  {
    id: 4,
    path: ROUTE_CAMPAIGN_SUCCESS,
    component: <CampaignSuccess />,
  },
  {
    id: 5,
    path: ROUTE_TIMEFRAME,
    component: <Timeframe />,
  },
  {
    id: 6,
    path: ROUTE_DISCOUNT_VALUE,
    component: <DiscountValue />,
  },
  {
    id: 7,
    path: ROUTE_SUMMARY,
    component: <Summary />,
  },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <DashboardHeader />
          <div style={{ overflow: 'auto' }}>
            <Routes>
              {routes.map((route: RouteOptions, index: number) => (
                <Route key={index} path={route.path} element={route.component} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export { AppRouter };
