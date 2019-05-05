var canvas = document.querySelector('canvas'); //searches for an html element called Canvas

var c = canvas.getContext('2d'); // c is for context

var text = '30';

  var colorArray = [
    '#EEDFCC',
    '#CDC0B0',
    '#C1CDCD',
    '#CDC1C5',
    '#EEDC82'
  ];

  var fontArray = [
    'Abril Fatface',
    'Righteous',
    'Alfa Slab One',
    'Luckiest Guy',
    'Bangers',
    'Bungee',
  ];

  var sizeArray = [
    '40',
    '50',
    '60',
    '70',
    '80'
  ];

  window.onload = resize();

    function resize(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

  // window.addEventListener('mousemove',
  //   function(event) {
  //     mouse.x = event.x;
  //     mouse.y = event.y;
  //   }
  // );

  window.addEventListener('resize',
    function (){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }
  );

  //create a javascript object to replicate code below
  function Style(color, font, size) {
    this.color = colorArray[Math.floor(Math.random()* colorArray.length)];
    this.font = fontArray[Math.floor(Math.random()* fontArray.length)];
    this.size = sizeArray[Math.floor(Math.random()* sizeArray.length)];
    }

    // anonymous function
   this.draw = function(text){
     c.title = this.text;
     c.fillStyle = this.color;
     c.fill();
   }

          this.draw();
      }
    }

    var textArray = []; // place to store all 100 circles

  function init(){
      textArray = []; //resets array to zero circles
      for(var i = 0; i < 700; i++){
          // var radius = Math.random() * 3 + 1;
          // var x = Math.random() * (innerWidth - radius * 2) + radius;
          // var y = Math.random() * (innerHeight - radius * 2) + radius;
          // var dx = Math.random() - 0.5; // x velocity either negative or positive
          // var dy = Math.random() - 0.5; // y velocity, multiplying by 8 number increases speed either to 4 or -4

          circleArray.push(new Text(x, y, dx, dy, radius));
      }
  }

  function animate(){
    requestAnimationFrame(animate); //sets the animate function up as argument to requestAnimationFrame function, which creates a loop
    c.clearRect(0, 0, innerWidth, innerHeight); //clears the screen
      for(var i =0; i < textArray.length; i++){
        textArray[i].update();
      }
  }


    init();
    animate(); //calls the animate function
