import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    ProfileService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
