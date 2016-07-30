console.log('app.js loaded');

var app = angular.module('pokemonApp', []);
app.controller('PokemonIndexController', PokemonIndexController);

PokemonIndexController.$inject = ['$http'];

function PokemonIndexController($http) {
  this.newPoke = {};

  
}
