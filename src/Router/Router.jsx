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
      <Route path={ROUTER_KEY.HOME} exact component={Home} />
      <Route path={ROUTER_KEY.SLOT_MACHINES} component={SlotMachines} />
      <Route path={ROUTER_KEY.SPEED_BOAT} component={SpeedBoat} />
      <Route path={ROUTER_KEY.BATH_SAUNA} component={BathSauna} />
      <Route exact path={ROUTER_KEY.WATERS_SLIDES} component={Waterslides} />
    </Switch>
  </BrowserRouter>
)
