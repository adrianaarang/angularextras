import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FileModel } from "../models/filemodel";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServicePostFiles {
  constructor(private _http: HttpClient) {}

  postFile(filemodel: FileModel): Observable<any> {
    let json = JSON.stringify(filemodel);
    let header = new HttpHeaders().set("Content-Type", "application/json");
    let request = "/testingfiles";
    let url = environment.apiUrl + request;
    return this._http.post(url, json, { headers: header });
  }
}
