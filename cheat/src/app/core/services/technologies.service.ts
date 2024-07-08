import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITechnology} from "../shared/interfaces/technologies.interface";

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private http: HttpClient) { }

  public getTechnologiesTypes(): Observable<ITechnology[]> {
    return this.http.get<ITechnology[]>('http://localhost:3000/api/technologies/')
  }
}
