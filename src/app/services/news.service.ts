import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../components/interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<News[]>(
      `https://api.spaceflightnewsapi.net/v3/articles`
    );
  }
}
