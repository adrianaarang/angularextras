import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {
  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);


  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados
  ){}

  async logInEmpleado(): Promise<void>{
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName, password);
    let response = await this._service.logInEmpleadoAsync(login);
    this.mensaje = "ya estás dentro";
    await this._serviceAuth.logInEmpleados(response.response);
    this._cdr.detectChanges();
    }

  ngOnInit(): void {
    

  }
}
