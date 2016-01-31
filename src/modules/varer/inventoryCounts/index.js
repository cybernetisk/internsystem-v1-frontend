import React from 'react'
import {Route} from 'react-router'
import reactor from '../../../reactor'

import ListStore from './list/ListStore'
import InventoryCountStore from './item/InventoryCountStore'
import FilterStore from './item/FilterStore'
import List from './list/List'
import InventoryCount from './item/InventoryCount'
import Registrations from './registrations/Main'

import './registrations'

reactor.registerStores({
  varerInventoryCounts: ListStore,
  varerInventoryCount: InventoryCountStore,
  varerInventoryCountFilter: FilterStore,
})

export default (
  <Route>
    <Route name='varer/inventorycounts' path='/varer/inventorycounts' handler={List}/>
    <Route name='varer/inventorycount' path='/varer/inventorycount/:id' handler={InventoryCount}/>
    <Route name='varer/inventorycount/registrations' path='/varer/inventorycount/:id/registrations' handler={Registrations}/>
  </Route>
)
