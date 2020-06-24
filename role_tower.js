
module.exports = {
run: function(tower){
   //looks for a target in range of tower
   if(target == undefined){
      //If hostile is nearby then attack it
    target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    tower.say(target);
    if(target != undefined){
      tower.attack(target);
    }
      //if there are no hostile creeps then repair structures
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
