'use strict';
import AppController from './app.controller.ts';

export default class App implements ng.IComponentOptions {
  public controller: Function;
  public templateUrl: string = './app/src/app.html';

  constructor() {
    this.controller = AppController;
  }
}
