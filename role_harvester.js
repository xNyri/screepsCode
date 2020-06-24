

module.exports = {
    run: function(creep){
     if(creep.memory.working && creep.carry.energy == 0) {
            creep.memory.working = false;
         }
        if(!creep.memory.working && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        if (creep.memory.working){
            var project = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity});
                creep.say("I'm working on " + project);
            if(project == undefined){
                project = creep.room.controller;
               if( creep.upgradeController(project) == ERR_NOT_IN_RANGE){
                   creep.moveTo(project,{visualizePathStyle: {stroke: '#ffffff'}});
               }
            }
            // transfers energy to building
            else if (creep.transfer(project, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(project,{visualizePathStyle: {stroke: '#ffffff'}});
            }
        }else{
        var source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_STORAGE
                                && s.store[RESOURCE_ENERGY] > 0});;
           if(source == null){
                source = creep.pos.findClosestByPath(FIND_SOURCES);
            }
            creep.say("I'm mining");
            if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(source,{visualizePathStyle: {stroke: '#ffffff'}});
            }else if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source,{visualizePathStyle: {stroke: '#ffffff'}});
            }

        }
    }
};
