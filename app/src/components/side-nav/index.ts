'use strict';

import * as angular from 'angular';
import SideNavComponent from './side-nav.component.ts';

const sideNav: string = angular
  .module('app.components.sideNav', [])
  .component('sideNav', SideNavComponent)
  .name;

export default sideNav;
