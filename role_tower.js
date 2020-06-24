/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_tower');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
run: function(tower){
   if(target == undefined){
    target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    tower.say(target);
    if(target != undefined){
      tower.attack(target);
    }
   }else if(target == undefined){
    target = tower.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => s.hitpoints < s.hitpointsMax});
    tower.say(target);
    if(target != undefined){
      tower.repair(target);
    }
   }
  }
};
