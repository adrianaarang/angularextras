import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { fileUpload } from "../models/file-upload";
import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable()
export class FileUploadService {
    url = environment.apiUrl + "/fileupload/";
    constructor(private _http: HttpClient) {}

}
