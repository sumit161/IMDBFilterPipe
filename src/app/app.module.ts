import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { LengthPipe } from './shared/pipe/length.pipe';
import { MovieCardComponent } from './shared/component/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LengthPipe,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
