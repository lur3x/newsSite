import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { News } from '../interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  news$!: Observable<News>;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.news$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.newsService.getNewsById(params['id']);
      })
    );
  }
}
