/// <reference path="../../typings/index.d.ts" />

// packages
import * as angular from 'angular';
import * as ngMaterial from 'angular-material';
import Common from './common/index.ts';
import Components from './components/index.ts';

// styles
import 'angular-material/angular-material.css';
import './styles/styles.scss';

// src
import AppComponent from './app.component.ts';

angular.module('app', [
  ngMaterial,
  Common,
  Components
])
  .component('app', new AppComponent());
