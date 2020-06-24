var roleHarvester = require('role_harvester');
var roleBuilder = require('role_builder');
var roleTower = require('role_tower');
module.exports.loop = function () {
    for(var name in Game.tower){
        var tower = Game.tower[name];
        roleTower.run(tower);
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
      }
    var harvesterNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builderNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    if(harvesterNumb.length < 3){
        Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY], 'Harvester' + Game.time, {
    memory: {role: 'harvester'}});
    }
    else if(builderNumb.length < 3){
        Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY,], 'Builder' + Game.time, {
    memory: {role: 'builder'}});
    }

}
