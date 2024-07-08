import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {IArticle} from "../../../../shared/interfaces/articles.interface";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-article-accordion',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass
  ],
  templateUrl: './article-accordion.component.html',
  styleUrl: './article-accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleAccordionComponent implements OnInit {
  @Input() openedContentId!: string;
  @Input() article!: IArticle;
  @Output() openArticleChild: EventEmitter<IArticle> = new EventEmitter<IArticle>();

  public showTree = false;

  constructor(private cdr: ChangeDetectorRef) {}

  public get getArticleIcon(): string {
    return !this.article.childArticles.length ?
      '' :
    !!this.article.childArticles.length && this.showTree ? '-' : '+'
  }

  public ngOnInit(): void {
    this.showTree = true;
  }

  public openTree(): void {
    this.showTree = !this.showTree;
    this.emitArticleContent(this.article);

    this.cdr.detectChanges();
  }

  public emitArticleContent(article: IArticle): void {
    if (this.openedContentId !== article._id) {
      this.openArticleChild.emit(article);
    }
  }
}
