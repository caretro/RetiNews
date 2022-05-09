import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { News } from "src/app/models/news";
import { NewsService } from "src/app/services/news.service";
import { CustomValidators } from "src/app/validation/custom-validators";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form: FormGroup;

  constructor(
    public newsService: NewsService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required, CustomValidators.regexValidator(/culo/i)]),
      publishDate: new FormControl("", [Validators.required]),
      author: new FormControl("")
      // tags: 
    });
  }

  onSubmit() {
    this.newsService.addNews(this.form.value as News);
    this.form.reset();
  }
}
