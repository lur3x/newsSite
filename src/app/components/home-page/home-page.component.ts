import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  searchStr = '';
  posts: News[] = [];
  constructor(private news: NewsService) {}

  search(str: string) {
    return this.news.searchNewsByTitle(str).subscribe((results) => {
      this.posts = results;
    });
  }


  ngOnInit() {
    this.news.getNews().subscribe((post: any) => {
      this.posts = post;
    });
  }
}
