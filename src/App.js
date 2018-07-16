import React from 'react';

import {Route, Switch} from 'react-router-dom'
import indexRoutes from "./routes/index.jsx";

const App = () => (
    <Switch>
        {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
)

export default App;

