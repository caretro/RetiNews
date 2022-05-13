import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
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
      author: new FormControl(""),
      tags: new FormArray([], [CustomValidators.tagsValidator()])
    });
  }

  onSubmit() {
    let n = this.form.value as News;
    n.publishDate = new Date(this.form.get("publishDate")?.value); // inserito per trasformare in Date il valore restituito come stringa dalla form. Si possono usare anche altri metodi :)
    this.newsService.addNews(n);
    this.form.controls["tags"] = new FormArray([]);
    this.tags.setValidators(CustomValidators.tagsValidator())
    this.form.reset();    
  }

  addTag() {
    this.tags.push(new FormControl());
  }

  get tags() {
    return this.form.get('tags') as FormArray;
  }
}
