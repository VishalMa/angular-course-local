import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { CourseImageComponent } from './course/course-image/course-image.component';
import { HighlightedDirective } from './directive/highlighted.directive';
import { NgxUnlessDirective } from './directive/ngx-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseTitleComponent,
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
