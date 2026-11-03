import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Upload } from './components/upload/upload';
import { ApiFilesComponent } from './components/api-file-component/api-file-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: Upload },
  { path: 'apiFilesComponent', component: ApiFilesComponent },
  { path: 'informesPdfComponent', component: InformesPdfComponent },
  {path: 'error', component: ErrorComponent},
  {path: 'equipos', component: EquipoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
