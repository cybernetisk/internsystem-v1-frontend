import React from 'react'
import {Route} from 'react-router'
import reactor from '../../reactor'

import Intern from './components/Intern'
import InternList from './components/InternList'
import Group from './components/Group'
import Groups from './components/Groups'
import Stats from './components/Stats'
import Levels from './components/Levels'

import AccessLevelsStore from './stores/AccessLevelStore'
import InternStore from './stores/InternStore'
import GroupStore from './stores/GroupStore'

reactor.registerStores({
  accesslevels: AccessLevelsStore,
  interns: InternStore,
  groups: GroupStore
})
module.exports = (
  <Route>
    <Route name="intern" path="/intern" handler={Stats}/>
    <Route name="intern/groups" path="/intern/groups" handler={Group}/>
    <Route name="intern/group" path="intern/groups/:groupId" handler={Groups}/>
    <Route name="intern/levels" path="/intern/levels" handler={Levels}/>
    <Route name="intern/interns" path="intern/interns" handler={InternList}/>
    <Route name="intern/intern" path="/intern/interns/:internId" handler={Intern}/>
  </Route>
)
