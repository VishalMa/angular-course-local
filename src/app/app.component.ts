import { HighlightedDirective } from './directive/highlighted.directive';
import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course/course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChild('cardRef1')
  card: CourseCardComponent;
  @ViewChild('cardRef2')
  card2: CourseCardComponent; // member variable

  @ViewChildren(CourseCardComponent)
  courseList: QueryList<CourseCardComponent>;

  @ViewChild(HighlightedDirective)
  publishDirective:HighlightedDirective;


   title = 'Angular-course';
  // rxJsTitle='RXJS-course';
  // ngrxTitle='NGX-course';

  angularCourse = this.courses[0];
  rxJsCourse = this.courses[1];
  ngrxCourse = this.courses[2];

  onButtonClick(course: Course) {
   // console.log(this.card);
  //  console.log(this.courseList);
  //  console.log(this.courseList.first);
  //   console.log('App Module Clicked');
   // console.log(course);
  }

  catchOnToggleFromDirective($event){
   // console.log('catchOnToggleFromDirective !!!!' + $event);
  }
  ngAfterViewInit(): void {
  //  console.log(this.publishDirective);
    //this.publishDirective.toggle();
    //console.log(this.publishDirective.appHighlighted);
  }
}
