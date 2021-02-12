let rover1 = {
    direction: 'n',
    x: 0,
    y: 0,
    travelLog: [{direction: 'n', x:0, y:0}]
}

function turnLeft(rover) {
    switch (rover.direction) {
        case 'n': rover.direction = 'w';
        break;
        case 'w': rover.direction = 's';
        break;
        case 's': rover.direction = 'e';
        break;
        case 'e': rover.direction = 'n';
        break;
    };
    let newDirection = {
        direction: rover.direction,
        x: rover.x,
        y: rover.y
    };
    rover.travelLog.push(newDirection);
    console.log('turnLeft was called!');
};

function turnRight(rover) {
    switch (rover.direction) {
        case 'n': rover.direction = 'e';
        break;
        case 'e': rover.direction = 's';
        break;
        case 's': rover.direction = 'w';
        break;
        case 'w': rover.direction = 'n';
        break;
    };
    let newDirection = {
        direction: rover.direction,
        x: rover.x,
        y: rover.y
    };
    rover.travelLog.push(newDirection);
    console.log('turnRight was called!');
  };
  
function moveForward(rover) {
    switch (rover.direction) {
        case 'n': rover.y--;
        break;
        case 'w': rover.x--;
        break;
        case 's': rover.y++;
        break;
        case 'e': rover.x++;
        break;
    };
    let newDirection = {
        direction: rover.direction,
        x: rover.x,
        y: rover.y
    };
    rover.travelLog.push(newDirection);
    console.log('moveForward was called');
    if (newDirection.x <0 || newDirection.x >9 || newDirection.y <0 || newDirection.y >9){
        console.log('You are out of the board');
    }
}
  
function moveBackwards(rover) {
    switch (rover.direction) {
        case 'n': rover.y++;
        break;
        case 'w': rover.x++;
        break;
        case 's': rover.y--;
        break;
        case 'e': rover.x--;
        break;
    };
    let newDirection = {
        direction: rover.direction,
        x: rover.x,
        y: rover.y
    };
    rover.travelLog.push(newDirection);
    console.log('moveBackwards was called');
    if (newDirection.x <0 || newDirection.x >9 || newDirection.y <0 || newDirection.y >9){
        console.log('You are out of the board');
    }
}
  

function commands(rover, command) {
    for (let i=0; i<command.length; i++){
        let order = command[i];
        switch (order) {
            case 'l': turnLeft(rover);
            break;
            case 'r': turnRight(rover);
            break;
            case 'f': moveForward(rover);
            break;
            case 'b': moveBackwards(rover);
            break;
            default: console.log('Thats not a valida input');
        }
    }
    console.log(rover.travelLog);
}

//i am working on the 'bonus 4' challenge, obstacles. it will be ready soon :)

commands(rover1, 'rffvfr');