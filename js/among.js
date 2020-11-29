class Player {
 constructor($dom, limits) {
  
  this.$player = $dom;
  this.playerBounds = this.$player.getBoundingClientRect();
  this.lastMovement = Date.now();
  this.axisX = (window.innerWidth / 2) - (this.playerBounds.width / 2);
  this.axisY = (window.innerHeight / 2) - (this.playerBounds.height / 2);
  this.limits = limits;
  this.keys = { top: false, right: false, down: false, left: false};
  
  window.addEventListener("keydown", (ev) => this.handleKeydown(ev), false);
  window.addEventListener("keyup", (ev) => this.handleKeyup(ev), false);
  
  this.walk(this.axisX, this.axisY);
  setTimeout(() => this.loop(), 24);
 }

 setLimits(limits) {
  this.limits = limits;
 }
 
 loop() {
  
  if (this.keys.left && (this.axisX - 10) > this.limits.xStart) {
   this.setWalking();
   this.setTurnLeft(true);
   this.walk(this.axisX - 10, this.axisY);
  }

  if (this.keys.right && (this.axisX + this.playerBounds.width + 10) < this.limits.xEnd) {
   this.setWalking();
   this.setTurnLeft(false);
   this.walk(this.axisX + 10, this.axisY);
  }

  if (this.keys.down && (this.axisY + this.playerBounds.height + 10) < this.limits.yEnd) {
   this.setWalking();
   this.walk(this.axisX, this.axisY + 10);
  }

  if (this.keys.up && (this.axisY - 10) > this.limits.yStart) {
   this.setWalking();
   this.walk(this.axisX, this.axisY - 10);
  }
  
  //if(Date.now() - this.lastMovement > 50) this.setWalking(false);
  
  setTimeout(() => this.loop(), 24);
 }

 handleKeydown(ev) {  
  switch (ev.code) {
   case "ArrowLeft":
   case "KeyA":
    this.keys.left = true;
    break;
   case "ArrowRight":
   case "KeyD":
    this.keys.right = true;
    break;
   case "ArrowDown":
   case "KeyS":
    this.keys.down = true;
    break;
   case "ArrowUp":
   case "KeyW":
    this.keys.up = true;
    break;
  }
 }

 walk(x, y) {
  this.axisX = x;
  this.axisY = y;
  this.$player.style.setProperty("--x", this.axisX + "px");
  this.$player.style.setProperty("--y", this.axisY + "px");
  this.lastMovement = Date.now();
 }

 handleKeyup(ev) {
  this.setWalking(false);
  
  switch (ev.code) {
   case "ArrowLeft":
   case "KeyA":
    this.keys.left = false;
    break;
   case "ArrowRight":
   case "KeyD":
    this.keys.right = false;
    break;
   case "ArrowDown":
   case "KeyS":
    this.keys.down = false;
    break;
   case "ArrowUp":
   case "KeyW":
    this.keys.up = false;
    break;
  }
 }
 
 checkPosition() {
  if(this.axisX < this.limits.xStart) this.walk(this.limits.xStart, this.axisY);
  if(this.axisY < this.limits.yStart) this.walk(this.axisX, this.limits.yStart);
  
  if((this.axisX + this.playerBounds.width) > this.limits.xEnd) this.walk(this.limits.xEnd - this.playerBounds.width, this.axisY);
  if((this.axisY + this.playerBounds.height) > this.limits.yEnd) this.walk(this.axisX, this.limits.yEnd - this.playerBounds.height);
 }
 
 setWalking(state = true) {
  this.$player.classList.toggle("c-player--walking", state);
 }

 setTurnLeft(state = true) {
  this.$player.classList.toggle("c-player--turn-left", state);
 }
 
 setColor(color = 'CYAN'){
  this.$player.style.setProperty("--sprite-idle", 'url("' + AssetAssembler.getPlayer('IDLE', color) + '") no-repeat center bottom');
  this.$player.style.setProperty("--sprite-walking", 'url("' + AssetAssembler.getPlayer('WALKING', color) + '") no-repeat center bottom');
 }
 
 show() {
  this.$player.classList.toggle("c-player--hide", false);
 }
}

let $player = document.querySelector(".c-player");

let limits = document.body.getBoundingClientRect();

limits.xStart = limits.x + 120;
limits.yStart = limits.y + 20;
limits.xEnd = limits.width - 20;
limits.yEnd = limits.height - 20;

let player = new Player($player, limits);

window.addEventListener('load', () => player.show());

window.addEventListener('resize', () => {
 let limits = document.body.getBoundingClientRect();

 limits.xStart = limits.x + 120;
 limits.yStart = limits.y + 20;
 limits.xEnd = limits.width - 20;
 limits.yEnd = limits.height - 20;
 
 player.setLimits(limits);
 player.checkPosition();
})

document
 .querySelectorAll('.c-color')
 .forEach( el => el.addEventListener('click', (ev) => player.setColor(ev.target.querySelector('.c-color__input')
 .value), false))
