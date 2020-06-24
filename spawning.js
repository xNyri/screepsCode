
module.exports = {

    run: function(creep){
            var numbCreeps = Game.creeps;
            var workerNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'worker');
            var builderNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
            var ferryNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'ferry');
            var minerNumb = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
            console.log('Number of Workers: ' + workerNumb.length);
            console.log('Number of Builders: ' + builderNumb.length);
            console.log('Number of Ferrys: ' + ferryNumb.length);
            var body = [];
            var partNumb = Math.floor(Game.spawns.Spawn1.room.energyCapacityAvailable / 200);
                for(i = 0; i < partNumb; ++i){
                    body.push(MOVE);
                    body.push(CARRY);
                    body.push(WORK);
                }
        if(workerNumb.length == 0){
            var newName = 'Worker' + Game.time;
             Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,CARRY], newName,
            {memory: {working: false , role: 'worker'}});
        }else if(workerNumb.length < 2){
            var newName = 'Worker' + Game.time;
             Game.spawns['Spawn1'].spawnCreep(body, newName,
            {memory: {working: false , role: 'worker'}});
        }else if(builderNumb.length < 2){
             var newName = 'Builder' + Game.time;
             Game.spawns['Spawn1'].spawnCreep(body, newName,
             {memory: {working: false , role: 'builder'}});
        }else if(minerNumb.length < 2){
            var newName = 'Miner' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,WORK,WORK,WORK,WORK], newName,
             {memory: {working: false , role: 'miner'}});  
        
        }else if(ferryNumb.length < 2){
            console.log('Trying to spawn Ferry');
            var newName = 'Ferry' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY], newName,
             {memory: {working: false , role: 'ferry'}}); 
        
       
        }
    }
};