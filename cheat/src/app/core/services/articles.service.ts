import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IArticle} from "../shared/interfaces/articles.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  public getArticlesByType(technologyId: string): Observable<IArticle> {
    return this.http.get<IArticle>(`http://localhost:3000/api/articles/technology/${technologyId}`).pipe(map((d: any) => d[0]))
  }
}
