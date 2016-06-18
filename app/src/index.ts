/// <reference path="../../typings/index.d.ts" />

//packages
import * as angular from 'angular';
import * as ngMaterial from 'angular-material';

//styles
import 'angular-material/angular-material.css';
import './styles.scss';

// src
import App from './app.component.ts';

angular.module('app', [
  ngMaterial
])
  .component('app', new App());
