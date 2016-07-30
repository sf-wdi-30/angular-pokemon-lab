console.log('PokeIndexController succesfully online!');

angular
    .module('pokemon', [])
    .controller('PokeIndexController', PokeIndexController);

PokeIndexController.$inject = ['$http'];

function PokeIndexController($http) {
    var app = this;
    app.newPoke = {};

    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/pokemon'
    }).then(function successCallback(response) {
        app.poke = response.data.pokemon;
        console.log(app.poke);
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });

    app.createPoke = function() {

        $http({
            method: 'POST',
            url: 'https://super-crud.herokuapp.com/pokemon',
            data: app.newPoke,
        }).then(function successCallback(response) {
            app.pokemon.push(response.data);
        }, function errorCallback(response) {
            console.log('There was an error posting the data', response);
        });
    };

    app.deletePoke = function(pokemon) {

        $http({
            method: 'DELETE',
            url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id
        }).then(function successCallback(json) {
            var index = app.poke.indexOf(pokemon);
            app.poke.splice(index, 1);
        }, function errorCallback(response) {
            console.log('There was an error deleting the data', response);
        });
    };

    app.editPoke = function(pokemon) {
        $http({
            method: 'PUT',
            url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id
        }).then(function successCallback(json) {
        }, function errorCallback(response) {
            console.log('There was an error editing the data', response);
        });
    };
}
