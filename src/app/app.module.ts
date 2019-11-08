import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { HttpMoviesService } from './http-movies.service';
import { SharedModule } from './shared/shared.module';
import { MoviesComponent } from './components/movies/movies.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalComponent } from './components/modal/modal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarPipe } from './pipes/search-bar.pipe';
//import { SearchbarComponent } from './components/components/searchbar/SearchbarComponent';
import {FormsModule } from '@angular/forms'

@NgModule({
  //components
  declarations: [
    AppComponent,
    MoviesComponent,
    ModalComponent,
    NavBarComponent,
    SearchBarPipe
    //SearchbarComponent
  ],
  imports: [
    //modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    //services
    HttpMoviesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
