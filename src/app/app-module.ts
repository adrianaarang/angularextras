import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { Upload } from './components/upload/upload';
import { ApiFilesComponent } from './components/api-file-component/api-file-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    Upload,
    ApiFilesComponent,
    InformesPdfComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  bootstrap: [App],
})
export class AppModule {}
