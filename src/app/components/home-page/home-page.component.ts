import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts: News[] = [];
  constructor(private news: NewsService) {}

  ngOnInit() {
    this.news.getNews().subscribe((post: any) => {
      this.posts = post;
    });
  }
}
