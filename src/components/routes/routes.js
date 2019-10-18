import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import Players from '../players/players';
import Player from '../players/player';

const Routes = () => {
    return (
        <Switch>
            <Route path='/players/:id' component={Player} />
            <Route path="/players" component={Players} />
            <Route path="/" component={Home} />
        </Switch>
    );
}

export default Routes;