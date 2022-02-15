import React from 'react'
import HeaderLogin from "../components/HeaderLogin";
import PDetailsPresenter from '../components/PDetailsPresenter';
import Tabmenu from '../components/Tabmenu';

const PartyDetailsPresenter = () => {
  return (
    <div>
    <HeaderLogin />
    <Tabmenu />
    <PDetailsPresenter />
    </div>
  )
}

export default PartyDetailsPresenter