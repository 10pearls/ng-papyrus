import * as angular from 'angular';
import SideNav from './side-nav/index.ts';

const Components: string = angular
  .module('app.components', [
    SideNav
  ])
  .name;

export default Components;
