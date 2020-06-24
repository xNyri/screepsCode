//Import from modules
var roleHarvester = require('role_harvester');
var roleBuilder = require('role_builder');
var roleTower = require('role_tower');
//Tower module
module.exports.loop = function () {
    //Grabs id of any towers in the game and saves it into variable tower
    for(var name in Game.tower){
        var tower = Game.tower[name];
        //runs tower program for each tower in the game
        roleTower.run(tower);
    }
    //Grabs id of creeps in the game and saves the id into variable creep
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        //Search the creeps memory for its defined role then runs that roles program
        if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
      }
    //find the number of creeps inside of each role and saves the number into a variable.
    var harvesterNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builderNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    //spawns creeps based on the number of creeps currently in that role
    if(harvesterNumb.length < 3){
        Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY], 'Harvester' + Game.time, {
    memory: {role: 'harvester'}});
    }
    else if(builderNumb.length < 3){
        Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,], 'Builder' + Game.time, {
    memory: {role: 'builder'}});
    }

}
