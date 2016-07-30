console.log('app.js loaded');

// INITIALIZE ANGULAR APP
var app = angular.module('pokemonApp', []);
// INITIALIZE ANGULAR CONTROLLER
app.controller('PokemonIndexController', PokemonIndexController);
// INJECT $HTTP MODULE
PokemonIndexController.$inject = ['$http'];

// CONTROLLER FUNCTION
function PokemonIndexController($http) {
  var me = this;
  // me.newPoke = {};

  $http({
    method:'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCb(response) {
    me.pokemon = response.data.pokemon; // me.pokemon === []
    // console.log(me.pokemon);
  }, function errorCb(response) {
    console.log('ERROR', response);
  });

  me.showPoke = function(poke) {
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/pokemon/' + poke._id
    }).then(function successCb(response) {
      me.poke = response.data;
      console.log(me.poke);
    }, function errorCb(response) {
      console.log('ERROR', response);
    });
  };


}
