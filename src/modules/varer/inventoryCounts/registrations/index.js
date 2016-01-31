import reactor from '../../../../reactor'
import { Store, toImmutable } from 'nuclear-js'
import actionTypes from '../actionTypes'

const store = Store({
  getInitialState() {
    return toImmutable({
      id: null,
      data: null,
      error: null,
      isLoading: true,
    })
  },

  initialize() {
    this.on(actionTypes.RECEIVE_INVENTORYCOUNTREGS_START, (state, {id}) => {
      return state
        .set('id', id)
        .set('error', null)
        .set('isLoading', true)
    })
    this.on(actionTypes.RECEIVE_INVENTORYCOUNTREGS_SUCCESS, (state, {response}) => {
      return state
        .set('id', toImmutable(response.id))
        .set('data', toImmutable(response))
        .set('isLoading', false)
    })
    this.on(actionTypes.RECEIVE_INVENTORYCOUNTREGS_FAILURE, (state, {error}) => {
      console.log("Receiving inventory count failed", error)
      return state
        .set('error', toImmutable(error))
        .set('isLoading', false)
    })
    this.on(actionTypes.VARE_ADDED, (state, {countId, vare}) => {
      if (state.get('id') != countId) {
        return state
      }

      return state.updateIn(['data', 'varer'], varer => varer.push(toImmutable(vare)))
    })
  }
})

reactor.registerStores({
  varerInventoryCountRegistrations: store
})
