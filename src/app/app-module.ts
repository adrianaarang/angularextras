import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
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
import { errorInterceptor } from './interceptors/error-interceptor';
import { ServicePostFiles } from './services/service.post.files';
import { ServiceEquipos } from './services/service.equipos';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ServiceEmpleados } from './services/service.empleados';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    Upload,
    ApiFilesComponent,
    InformesPdfComponent,
    ErrorComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  bootstrap: [App],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    ServicePostFiles,
    ServiceEquipos,
    ServiceEmpleados,
  ],
})
export class AppModule {}
