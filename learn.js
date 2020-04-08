(() => {
    // Coding
    // This is function for get element ID 
    // From HTML File and setup canvas
  function setup(){
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width = window.innerWidth;    // set window size by innerWidth
    canvas.height = window.innerHeight;  // set window size by innerHeight

    return {
      canvas,
      canvasContext : canvas.getContext('2d'),
      numberOfSnowBalls :250
    }
  }
  //////// END Function SETUP  //////
  function random(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  // This is Function For Create SnowBalls //
  // get Parameter canvas and number of snow balls
  function createSnowBalls(canvas, numberOfSnowBalls){
   return  [...Array(numberOfSnowBalls)].map(() => {
     return {
       x: random(0,canvas.width),
       y: random(0,canvas.height),
       opacity: random(0.5, 1),
       radius: random(2, 4),
       speedX: random(-5, 5),
       speedY: random(1, 3)
     }
   })//space syntax (ES6) 
  }
  ////// END FUNCTION create snowball  //////
  //// Function Draw snow Balls //////
  function drawSnowBalls(canvasContext, snowBall){
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x ,snowBall.y, snowBall.radius, 0, Math.PI*2);
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
    canvasContext.fill();
  }
  //// End Function Draw snow Balls //////
  /// Function move Snowball ////
  function moveSnowBalls(canvas, snowBall){
    snowBall.x += snowBall.speedX;
    snowBall.y +=  snowBall.speedY;

    if(snowBall.x > canvas.width){
      snowBall.x = 0;
    }else if (snowBall.x < 0){
      snowBall.x = canvas.width;
    }

    if(snowBall.y > canvas.height){
      snowBall.y = 0;
    }
  }
  ///// Function move Snowball
  function run(){
    const {canvas, canvasContext, numberOfSnowBalls} = setup();  // Object Destructuring ES6
    const snowballs = createSnowBalls(canvas, numberOfSnowBalls);
    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowballs.forEach((snowBall) => drawSnowBalls(canvasContext, snowBall));
      snowballs.forEach((snowBall) => moveSnowBalls(canvas, snowBall));
    }, 50)
    
    
  }

  /** This is section For run code */
  run();
})();
