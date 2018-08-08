
// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}
//恶魔圈
function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = 'white';
  this.size = 10;
}
//空心或者圈
EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  //加粗；
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}
//检查是否超过边界
EvilCircle.prototype.checkBounds = function () {
  if ((this.x + this.size) >= width) {
    this.x = this.x - this.size;
  }
  if (((this.x - this.size) <= 0)) {
    this.x = this.x + this.size;
  }
  if ((this.y + this.size) >= height) {
    this.y = this.y - this.size;
  }
  if ((this.y - this.size) <= 0) {
    this.y = this.y + this.size;
  }
}
//控制
EvilCircle.prototype.setControls = function () {
  let _this = this;
  window.onkeydown = function (e) {
    if (e.keyCode === 37) {
      _this.x -= _this.velX;
    } else if (e.keyCode === 39) {
      _this.x += _this.velX;
    } else if (e.keyCode === 38) {
      _this.y -= _this.velY;
    } else if (e.keyCode === 40) {
      _this.y += _this.velY;
    }
  }
}
//碰撞检测
EvilCircle.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (balls[j].exists) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        document.getElementById('p').innerText = 'Ball count:' + findcount(balls);
      }
    }
  }
}
//定义小球，位置，速度，颜色，大小
/**
 */
function Ball(x, y, velX, velY, exists, color, size, ) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}
//画小球
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
Ball.prototype.update = function () {
  //如果小球的半径加上位置等于屏幕的宽度，就逆行
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  if (((this.x - this.size) <= 0)) {
    this.velX = -(this.velX);
  }
  if ((this.y + this.size) >= height) {
    this.velY = -this.velY;
  }
  if ((this.y - this.size) <= 0) {
    this.velY = -this.velY;
  }
  //每次调用这个方法，小球就会发生移动，移动的距离为小球移动的速度
  this.x += this.velX;
  this.y += this.velY;
}
var balls = [];
let evilCircle = new EvilCircle(400, 400, true);
evilCircle.setControls();
function loop() {
  //将画布的颜色设置为半透明的黑色
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  //整个画布上绘制颜色，每次调用都可以挡住前面的数据
  ctx.fillRect(0, 0, width, height);
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();
  while (balls.length < 25) {
    let ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      true,
      'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
      random(10, 20)
    );
    balls.push(ball);
  }
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      // document.getElementById('p').innerText = 'Ball count:' + findcount(balls);
      balls[i].update();
      balls[i].collisionDetect();
    }
  }
  //调用自身这个函数，类似递归
  requestAnimationFrame(loop);
}
//当两个小球碰撞时将两个小球随机改变颜色
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
      }
    }
  }
}
loop();
let p = document.getElementById('p');
p.innerText = 'Ball count:' + findcount(balls);
function findcount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].exists) {
      count += 1
    }
  }
  return count;
}
