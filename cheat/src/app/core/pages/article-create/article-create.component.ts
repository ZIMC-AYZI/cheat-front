import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {DynamicTextAreaDirective} from "../../shared/directives/dynamic-text-area.directive";

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    DynamicTextAreaDirective
  ],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss'
})
export class ArticleCreateComponent implements OnInit {
  public titleControl!: FormControl;
  public descriptionControl!: FormControl;
  public articleForms!: FormArray;

  public get getFormGroups(): FormGroup[] {
    return this.articleForms.controls as FormGroup[];
  }

  public getControl(name: string, group: FormGroup): FormControl {
    console.log(group, 'GROUP')
    return group.get(name) as FormControl
  }

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.titleControl = new FormControl('', [Validators.required]);
    this.descriptionControl = new FormControl('', [Validators.required]);

    this.articleForms = this.fb.array([
      this.fb.group({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
      })
    ])
  }

  public createNewSection(): void {
    this.articleForms.push(this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    }))
  }
}
