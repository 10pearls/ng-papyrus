'use strict';

export default class App implements ng.IComponentOptions {
  public controller: Function;

  constructor() {
    this.controller = AppController;
  }

  public template($element: JQuery, $attrs: ng.IAttributes): string {
    return `
      <h1>{{$ctrl.name}}</h1>
      <input type="button" ng-click="$ctrl.hi()" value="say hi"/>
    `;
  }
}

class AppController implements ng.IComponentController {
  public name: string;
  constructor() {
    this.name = 'Bootstrapping Typescript Awesomeness!!';
  }


  public hi (): void {
    alert('is it me you are looking for?');
  }
}
