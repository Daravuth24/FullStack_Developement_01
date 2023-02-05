import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  /* This variable {{ courseName }}*/courseName="Angular";
  changeName(){
    this.courseName ="TypeScript"
  }
}
