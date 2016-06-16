/// <reference path="../../typings/index.d.ts" />

//packages
import * as angular from 'angular';
import * as ngMaterial from 'angular-material';

//styles
import 'angular-material/angular-material.css';

// src
import App from './app.controller.ts';

angular.module('app', [
  ngMaterial
])
  .controller('App', App);
