import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  getNewsById(id: string) {
    return this.http.get<News>(
      `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    );
  }

  searchNewsByTitle(str: string) {
    return this.http.get<News[]>(
      `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${str}`
    );
  }
}
