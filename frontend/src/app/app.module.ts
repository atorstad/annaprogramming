import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ForsideComponent } from './forside/forside.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- inkuderer AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
