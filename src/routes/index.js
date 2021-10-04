import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';

import ContractsPage from '../pages/Contracts';
import ContractPage from '../pages/Contract';
import PartiesPage from '../pages/Parties';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ContractsPage} />
      <Route path="/parties" exact component={PartiesPage} />
      <Route path="/contract/:id" component={ContractPage} />
    </Switch>
  );
}
