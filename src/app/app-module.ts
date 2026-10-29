import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { Upload } from './components/upload/upload';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, Upload],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [App],
})
export class AppModule {}
