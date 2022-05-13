import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public news: News[];

  constructor(
    public newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews().sort((x,y)=> (y.publishDate.getDate() - x.publishDate.getDate())).slice(0, 5);
  }

}
