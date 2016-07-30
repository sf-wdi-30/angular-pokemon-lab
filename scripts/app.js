console.log('PokeIndexController succesfully online!');

angular
  .module('pokemon', [])
  .controller('PokeIndexController', PokeIndexController);

  function PokeIndexController () {
    var app = this;
    app.newPoke = {};

  $http({
      method: 'GET',
      url: '/super-crud.herokuapp.com/pokemon'
    }).then(function successCallback(response) {
      app.pokemon = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

}
