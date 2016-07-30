console.log('PokeIndexController succesfully online!');

angular
  .module('pokemon', [])
  .controller('PokeIndexController', PokeIndexController);

PokeIndexController.$inject = ['$http'];

  function PokeIndexController ($http) {
    var app = this;
    app.newPoke = {};

  $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/pokemon'
    }).then(function successCallback(response) {
      app.pokemon = response.data.pokemon;
      console.log(app.pokemon);

    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

}
