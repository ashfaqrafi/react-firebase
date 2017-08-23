import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ClientHomeContainer from '../containers/ClientHomeContainer.jsx';

export default function () {
    return (
        <Route path='clientdashboard'>
            <IndexRoute component={ClientHomeContainer} />
        </Route>
    );
};
