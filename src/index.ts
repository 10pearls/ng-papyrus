/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/angular/index.d.ts" />

import * as angular from 'angular';
import App from './app.controller.ts';

angular.module('app', [])
  .controller('App', App);
