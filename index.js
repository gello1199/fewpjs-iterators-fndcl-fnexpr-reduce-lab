const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// debugger

const totalBatteries = batteryBatches.reduce(function(accumulater, element){
    return element += accumulater}, 0);

    // debugger

