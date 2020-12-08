import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from '../pages/Game';


const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Game} />
    </Switch>
);

export default Routes;