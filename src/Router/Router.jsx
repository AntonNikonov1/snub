import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SlotMachines } from '../pages/SlotMachines'
import { BathSauna } from '../pages/BathSauna'
import { Home } from '../pages/Home'
import { Waterslides } from '../pages/Waterslides'
import { SpeedBoat } from '../pages/SpeedBoat'
import { ROUTER_KEY } from './routerKeys'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTER_KEY.SLOT_MACHINES}>
        <SlotMachines />
      </Route>
      <Route path={ROUTER_KEY.SPEED_BOAT}>
        <SpeedBoat />
      </Route>
      <Route path={ROUTER_KEY.BATH_SAUNA}>
        <BathSauna />
      </Route>
      <Route exact path={ROUTER_KEY.WATERS_SLIDES} component={Waterslides} />
      <Route path={ROUTER_KEY.HOME} exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)
