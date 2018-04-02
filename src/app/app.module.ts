// module deps
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// services and routing modules
import { AppRoutingModule } from './app-routing.module';
import { PageService } from './page.service';

// basic page layout components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// specific page components
import { HomeComponent } from './home/home.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CookbookComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
