import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }

 land() {
  let result = window.confirm('Are you sure the shuttle is ready for landing?');
  if (result) {
     this.color = 'green';
     this.height = 5000;
     this.width = 0;
     this.message = 'Ready landing gear.';
  }
}

abort() {
  let result = window.confirm('Are you sure you want to abort thie flight?');
  if (result) {
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     this.message = 'Flight Aborted.';
  }
}

moveRocket(rocketImage, direction) {
  if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
     rocketImage.style.left = movement;
     this.width = this.width + 10000;
  } else if (direction === 'left') {
    let movement = parseInt(rocketImage.style.right) + 10 + 'px';
     rocketImage.style.right = movement;
     this.width = this.width + 10000;
  } else if (direction === 'up') {
    let upMovement = parseInt(rocketImage.style.down) - 10 + 'px';
    rocketImage.style.right = upMovement;
    this.height = this.height - 10000;
  } else if (direction === 'down') {
    let downMovement = parseInt(rocketImage.style.up) + 10 + 'px';
    this.height = this.height + 10000;
  }
}
}

