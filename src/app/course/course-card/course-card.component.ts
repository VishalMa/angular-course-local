import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit,AfterContentInit {

  @Input()
   course:Course;

   @Input()
   courseIndex:number;

   @Output('selectedCourseClick')
   selectedCourseClick= new EventEmitter<Course>();

  //  @ContentChild('srcImage') // Access By reference variable
  //  childImg:ElementRef;

  // @ContentChild(CourseImageComponent) // Access By Selector
  // childImg:CourseImageComponent;

  @ContentChildren(CourseImageComponent) // Access By Selector
  childImg:QueryList<CourseImageComponent>;
  constructor() { }

  ngOnInit() {
  }
  onSelectedCourseClick(){
    console.log('Course Button Clicked');
    this.selectedCourseClick.emit(this.course);
  }
  ngAfterViewInit(): void {
  // console.log("Method not implemented."+ this.childImg);
  }
  ngAfterContentInit(): void {
   // console.log("ngAfterContentInit." + this.childImg.first.iconURL);
  }
}
