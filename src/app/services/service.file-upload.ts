import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FileModel } from "../models/filemodel";
import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  url = environment.apiUrl + "/TestingFiles";

  constructor(private _http: HttpClient) {}

  // Convierte un File a base64 (sin el prefijo "data:...;base64,")
  toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  // Convierte el fichero, construye el modelo y lo envía a la API
  async uploadFile(file: File): Promise<unknown> {
    const fileContent = await this.toBase64(file);
    const body = new FileModel(file.name, fileContent);
    return await firstValueFrom(this._http.post(this.url, body));
  }
}
/**
 * También se puede hacer con Observable
 * @Injectable()
 * export class FileUploadService{
 * constructor (private _http: HttpClient){}
 *
 * postFile(filemodel: FileModel): Observable<any>{
 * let json = JSON.stringify(filemodel);
 * let header = new HttpHeaders().set("Content-Type", "application/json");
 * let responde = this._http.post(this.url, json, {headers:header});
 * return responde;
 * }
 * }
 */
