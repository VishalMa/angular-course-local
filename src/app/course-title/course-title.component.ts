import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css']
})
export class CourseTitleComponent implements OnInit {
  @Input()  
  course_title:string;
  @Input()
  backGroundColor: string;

  constructor() { }

  ngOnInit() {
  }

}
