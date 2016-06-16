'use strict';


export default class App {
  public name: String;

  constructor(private $q: ng.IQService) {
    this.name = 'Bootstrapping Typescript Awesomeness!';
  }
}
