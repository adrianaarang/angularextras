import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Upload } from './components/upload/upload';
import { ApiFilesComponent } from './components/api-file-component/api-file-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { LoginComponent } from './components/login-component/login-component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: Upload },
  { path: 'apiFilesComponent', component: ApiFilesComponent },
  { path: 'informesPdfComponent', component: InformesPdfComponent },
  {path: 'error', component: ErrorComponent},
  {path: 'equipos', component: EquipoComponent},
  {path: 'subordinados', component: SubordinadosComponent},
  {path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
