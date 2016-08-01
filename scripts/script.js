angular
      .module('pokemonapp', [])
      .controller('PokemonController', PokemonController);

PokemonController.$inject = ['$http'];
function PokemonController ( $http ) {

    var vm = this;
    //I should check whether i have to initialize newPoke
    vm.newPoke = {};
console.log('get it!');
      $http({
          method: 'GET',
          url: 'https://super-crud.herokuapp.com/pokemon'
        }).then(function RetrievalSuccess(response){
          // console.log(response.data.pokemon);
           vm.pokemon = response.data.pokemon;
          //  console.log(this.pokemon);
         },function RetrievalError(response){
           console.log('Failure to retrieve data');
         });

     vm.submitPoke = function () {
         console.log(vm.newPoke);
         $http({
           method: 'POST',
           url: 'https://super-crud.herokuapp.com/pokemon',
           data: vm.newPoke,
         }).then(function successCallback(response) {
           // how do we add the response data to our albums array?
           console.log(response);
           console.log(vm.pokemon);
         }, function errorCallback(response) {
           console.log('There was an error posting the data', response);
         });
         vm.newPoke = {};
         $http({
             method: 'GET',
             url: 'https://super-crud.herokuapp.com/pokemon'
           }).then(function RetrievalSuccess(response){
             // console.log(response.data.pokemon);
              vm.pokemon = response.data.pokemon;
             //  console.log(this.pokemon);
            },function RetrievalError(response){
              console.log('Failure to retrieve data');
            });
      };

      vm.deletePoke = function (poke) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/pokemon/'+ poke._id
    }).then(function successCallback(json) {
      var index = vm.pokemon.indexOf(poke);
      vm.pokemon.splice(index, 1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };

    vm.editPoke = function (poke){
      var index = vm.pokemon.indexOf(poke);
      $http({
        method: 'PUT',
        url: 'https://super-crud.herokuapp.com/pokemon/' + poke._id,
        data: vm.pokemon[index]
      }).then(function sucessCallback(json){
        console.log(json);

        vm.pokemon[index].name=json.data.name;
        vm.pokemon[index].pokedex=json.data.pokedex;
        vm.pokemon[index].evolves_from=json.data.evolves_from;
        vm.pokemon[index].image=json.data.image;
        console.log(vm.pokemon[index]);
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };

    vm.cancel = function (poke) {
      var index = vm.pokemon.indexOf(poke);
      $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/pokemon/' + poke._id,
      }).then(function sucessCallback(json){


        vm.pokemon[index].name=json.data.name;
        vm.pokemon[index].pokedex=json.data.pokedex;
        vm.pokemon[index].evolves_from=json.data.evolves_from;
        vm.pokemon[index].image=json.data.image;

      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };


}
//constructor, calling object, constructor, Jquery element
