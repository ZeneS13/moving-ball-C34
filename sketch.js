var ball;
var database;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    var ref=database.ref('ball/position');
    ref.on("value",readPos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x1,y1){
   database.ref('ball/position').set({
     x:ball.x+x1,
     y:ball.y+y1  
   });
}
function readPos(data){
var position=data.val();
ball.x = position.x;
ball.y=position.y;
}