import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMaps from './pages/OrphanagesMaps';
import Orphanage from './pages/Orphanage';
import CreateOrphanages from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMaps} />

                <Route path="/orphanages/create" component={CreateOrphanages} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
