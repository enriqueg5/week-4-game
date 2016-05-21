$(document).ready(function(){

  var charizard = {
    health: 120,
    counterAttack: 20,
    attack: 20,
  };

  var blastoise = {
    health: 180,
    counterAttack: 8,
    attack: 8,
  };

  var venusaur = {
    health: 150,
    counterAttack: 5,
    attack: 5,
  };

  var mewtwo = {
    health: 100,
    counterAttack: 30,
    attack: 30,
  };

  var pokemonSelected = false;
  var pokemon;
  var opponent;
  var opponentsLeft = 3;
  var opponentSelected = false;

  function reset(){
    pokemonSelected = false;
    opponentSelected = false;
    opponentsLeft = 3;
    $('#instruction').html("Select your pokemon");
    $('#fightDetails').empty();
    $('.selectPokemon').empty();
    $('.opponent').empty();
    $('.myPokemon').empty();
    $('.selectPokemon').append('<div class="col-md-3 charizard"></div>');
    $('.selectPokemon').append('<div class="col-md-3 blastoise"></div>');
    $('.selectPokemon').append('<div class="col-md-3 venusaur"></div>');
    $('.selectPokemon').append('<div class="col-md-3 mewtwo"></div>');
    charizard.health = 120;
    blastoise.health = 100;
    venusaur.health = 150;
    mewtwo.health = 180;
    charizard.counterAttack = 20;
    blastoise.counterAttack = 8;
    venusaur.counterAttack = 5;
    mewtwo.counterAttack = 30;
    pokemonStats();
    clicks();
  }



