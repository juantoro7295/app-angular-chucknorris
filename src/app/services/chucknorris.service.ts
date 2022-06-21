import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

  constructor(public http:HttpClient) { }

  /**
   * generar frase random service
   */

  generarFrase():Observable<any>{
    return this.http.get(environment.urlBase);
  }



}
