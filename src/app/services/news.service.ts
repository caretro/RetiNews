import { Injectable } from "@angular/core";

import { News } from "../models/news";

@Injectable()
export class NewsService {

    public news: News[] = []

    constructor() { }

    public getNews(): News[] {
        return this.news;
    }

    public getNewsDetail(id: number): News | undefined {
        return this.news.find(n => n.id == id);
    }

    public addNews(news: News) {
        news.id = this.getNews().length + 1;
        return this.news.unshift(news);
    }
}