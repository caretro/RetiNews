import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.html',
  styleUrls: ['./news-detail.scss']
})
export class NewsDetailComponent implements OnInit {

  public news: News;
  public id: string;

  constructor(
    public newsService: NewsService,
    private route: ActivatedRoute,
  ) { }


    // route.params.subscribe(params => console.log("side menu id parameter",params['id']));


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") as string;
    this.news = this.newsService.getNewsDetail(Number(this.id)) as News;
  }

}
