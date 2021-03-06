import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { SearchDataService } from './services/search-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NaviComponent } from './navi/navi.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoComponent } from './repo/repo.component';
import { DateCounterPipe } from './date-counter.pipe';
import { RepoDirectiveDirective } from './repo-directive.directive';
import { UserDirectiveDirective } from './user-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NaviComponent,
    NotFoundComponent,
    RepoComponent,
    DateCounterPipe,
    RepoDirectiveDirective,
    UserDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
