var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var level = 1 ;
var fails = 0 ;

var green1 = createSprite(60,200,75,200);
var green2 = createSprite(334,250,75,200);

var white1 = createSprite(136,137,25,25);
var white2 = createSprite(161,137,25,25);
var white3 = createSprite(186,137,25,25);
var white4 = createSprite(211,137,25,25);
var white5 = createSprite(236,137,25,25);
var white6 = createSprite(261,137,25,25);

var white7 = createSprite(136,162,25,25);
var white8 = createSprite(161,162,25,25);
var white9 = createSprite(186,162,25,25);
var white10 = createSprite(211,162,25,25);
var white11 = createSprite(236,162,25,25);
var white12 = createSprite(261,162,25,25);

var white13 = createSprite(136,187,25,25);
var white14 = createSprite(161,187,25,25);
var white15 = createSprite(186,187,25,25);
var white16 = createSprite(211,187,25,25);
var white17 = createSprite(236,187,25,25);
var white18 = createSprite(261,187,25,25);

var white19 = createSprite(136,212,25,25);
var white20 = createSprite(161,212,25,25);
var white21 = createSprite(186,212,25,25);
var white22 = createSprite(211,212,25,25);
var white23 = createSprite(236,212,25,25);
var white24 = createSprite(261,212,25,25);

var white25 = createSprite(136,237,25,25);
var white26 = createSprite(161,237,25,25);
var white27 = createSprite(186,237,25,25);
var white28 = createSprite(211,237,25,25);
var white29 = createSprite(236,237,25,25);
var white30 = createSprite(261,237,25,25);

var white31 = createSprite(136,262,25,25);
var white32 = createSprite(161,262,25,25);
var white33 = createSprite(186,262,25,25);
var white34 = createSprite(211,262,25,25);
var white35 = createSprite(236,262,25,25);
var white36 = createSprite(261,262,25,25);

var white37 = createSprite(136,287,25,25);
var white38 = createSprite(161,287,25,25);
var white39 = createSprite(186,287,25,25);
var white40 = createSprite(211,287,25,25);
var white41 = createSprite(236,287,25,25);
var white42 = createSprite(261,287,25,25);

var white43 = createSprite(136,312,25,25);
var white44 = createSprite(161,312,25,25);
var white45 = createSprite(186,312,25,25);
var white46 = createSprite(211,312,25,25);
var white47 = createSprite(236,312,25,25);
var white48 = createSprite(261,312,25,25);

var white49 = createSprite(286,162,25,25);
var white50 = createSprite(286,187,25,25);
var white51 = createSprite(111,262,25,25);
var white52 = createSprite(111,287,25,25);



var black1 = createSprite(200,20,400,40);

var finish = createSprite(336,336,75,25);

var wall1 = createSprite(200,0,400,10);
var wall2 = createSprite(200,400,400,10);
var wall3 = createSprite(0,200,10,400);
var wall4 = createSprite(400,200,10,400);
var wall5 = createSprite(200,40,400,5);
var wall6 = createSprite(63,100,80,5);
var wall7 = createSprite(337,350,80,5);
var wall8 = createSprite(25,200,5,200);
var wall9 = createSprite(375,250,5,200);
var wall10 = createSprite(200,125,150,5);
var wall11 = createSprite(200,325,150,5);
var wall12 = createSprite(100,175,5,150);
var wall13 = createSprite(300,274,5,150);
var wall14 = createSprite(75,300,105,5);
var wall15 = createSprite(325,150,105,5);
var wall16 = createSprite(125,313,5,30);
var wall17 = createSprite(275,137,5,30);
var wall18 = createSprite(125,185,5,125);
var wall19 = createSprite(275,265,5,125);
var wall20 = createSprite(113,250,30,5);
var wall21 = createSprite(287,200,30,5);

var rect1 = createSprite(150,150,15,15);
rect1.velocityY = 6;
var rect2 = createSprite(250,150,15,15);
rect2.velocityY = 6;
var rect3 = createSprite(200,300,15,15);
rect3.velocityY = -6;

var player = createSprite(60,150,20,20);

function draw() {
  background(rgb(182,176,250));
 
  
  if(player.isTouching(finish)){
    level+=1 ;
    player.x = 60 ;
    player.y = 150 ;
  }
  
  if(player.isTouching(rect1)){
    fails+=1 ;
    player.x = 60 ;
    player.y = 150 ;
  }
  
  if(player.isTouching(rect2)){
    fails+=1 ;
    player.x = 60 ;
    player.y = 150 ;
  }
  
  if(player.isTouching(rect3)){
    fails+=1 ;
    player.x = 60 ;
    player.y = 150 ;
  }
  
  if(keyWentDown("up")){
    player.velocityY = -3 ;
  }
  if(keyWentUp("up")){
    player.velocityY = 0 ;
  }
  
  if(keyWentDown("down")){
    player.velocityY = 3 ;
  }
  if(keyWentUp("down")){
    player.velocityY = 0 ;
  }
  
  if(keyWentDown("left")){
    player.velocityX = -3 ;
  }
  if(keyWentUp("left")){
    player.velocityX = 0 ;
  }
  
  if(keyWentDown("right")){
    player.velocityX = 3 ;
  }
  if(keyWentUp("right")){
    player.velocityX = 0 ;
  }
  
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
  
  rect1.bounceOff(wall10);
  rect1.bounceOff(wall11);
  rect2.bounceOff(wall10);
  rect2.bounceOff(wall11);
  rect3.bounceOff(wall10);
  rect3.bounceOff(wall11);
  
  rect1.shapeColor = "blue";
  rect2.shapeColor = "blue";
  rect3.shapeColor = "blue";
  
  player.shapeColor = "red" ;
  
  finish.shapeColor = "yellow";
  
  black1.shapeColor = "black" ;
  
  green1.shapeColor = rgb(187,255,182);
  green2.shapeColor = rgb(187,255,182);
  
  white1.shapeColor = rgb(248,247,255);
  white2.shapeColor = rgb(231,228,255);
  white3.shapeColor = rgb(248,247,255);
  white4.shapeColor = rgb(231,228,255);
  white5.shapeColor = rgb(248,247,255);
  white6.shapeColor = rgb(231,228,255);
  
  white7.shapeColor = rgb(231,228,255);
  white8.shapeColor = rgb(248,247,255);
  white9.shapeColor = rgb(231,228,255);
  white10.shapeColor = rgb(248,247,255);
  white11.shapeColor = rgb(231,228,255);
  white12.shapeColor = rgb(248,247,255);
  
  white13.shapeColor = rgb(248,247,255);
  white14.shapeColor = rgb(231,228,255);
  white15.shapeColor = rgb(248,247,255);
  white16.shapeColor = rgb(231,228,255);
  white17.shapeColor = rgb(248,247,255);
  white18.shapeColor = rgb(231,228,255);
  
  white19.shapeColor = rgb(231,228,255);
  white20.shapeColor = rgb(248,247,255);
  white21.shapeColor = rgb(231,228,255);
  white22.shapeColor = rgb(248,247,255);
  white23.shapeColor = rgb(231,228,255);
  white24.shapeColor = rgb(248,247,255);

  white25.shapeColor = rgb(248,247,255);
  white26.shapeColor = rgb(231,228,255);
  white27.shapeColor = rgb(248,247,255);
  white28.shapeColor = rgb(231,228,255);
  white29.shapeColor = rgb(248,247,255);
  white30.shapeColor = rgb(231,228,255);
  
  white31.shapeColor = rgb(231,228,255);
  white32.shapeColor = rgb(248,247,255);
  white33.shapeColor = rgb(231,228,255);
  white34.shapeColor = rgb(248,247,255);
  white35.shapeColor = rgb(231,228,255);
  white36.shapeColor = rgb(248,247,255);
  
  white37.shapeColor = rgb(248,247,255);
  white38.shapeColor = rgb(231,228,255);
  white39.shapeColor = rgb(248,247,255);
  white40.shapeColor = rgb(231,228,255);
  white41.shapeColor = rgb(248,247,255);
  white42.shapeColor = rgb(231,228,255);
  
  white43.shapeColor = rgb(231,228,255);
  white44.shapeColor = rgb(248,247,255);
  white45.shapeColor = rgb(231,228,255);
  white46.shapeColor = rgb(248,247,255);
  white47.shapeColor = rgb(231,228,255);
  white48.shapeColor = rgb(248,247,255);
  
  white49.shapeColor = rgb(231,228,255);
  white50.shapeColor = rgb(248,247,255);
  white51.shapeColor = rgb(248,247,255);
  white52.shapeColor = rgb(231,228,255);
  
  wall1.shapeColor = "black" ;
  wall2.shapeColor = "black" ;
  wall3.shapeColor = "black" ;
  wall4.shapeColor = "black" ;
  wall5.shapeColor = "black" ;
  wall6.shapeColor = "black" ;
  wall7.shapeColor = "black" ;
  wall8.shapeColor = "black" ;
  wall9.shapeColor = "black" ;
  wall10.shapeColor = "black" ;
  wall11.shapeColor = "black" ;
  wall12.shapeColor = "black" ;
  wall13.shapeColor = "black" ;
  wall14.shapeColor = "black" ;
  wall15.shapeColor = "black" ;
  wall16.shapeColor = "black" ;
  wall17.shapeColor = "black" ;
  wall18.shapeColor = "black" ;
  wall19.shapeColor = "black" ;
  wall20.shapeColor = "black" ;
  wall21.shapeColor = "black" ;
  
  drawSprites();
   
  
  textSize(25);
  stroke("white");
  fill("white");
  text("UtkarshBaisla",220,385);
  text("LEVEL : "+level, 30,30);
  text("FAILS : "+fails, 270,30);
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
