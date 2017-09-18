import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AdminDashboardContainer from '../containers/AdminDashboardContainer.jsx';

export default function () {
    return (
        <Route path='admindashboard'>
            <IndexRoute component={AdminDashboardContainer} />
        </Route>
    );
};
