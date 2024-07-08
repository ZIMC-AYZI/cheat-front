import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ArticlesService} from "../../services/articles.service";
import {ArticleAccordionComponent} from "./components/article-accordion/article-accordion.component";
import {IArticle} from "../../shared/interfaces/articles.interface";
import {AsyncPipe, NgIf} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-technology-details-page',
  standalone: true,
  imports: [
    ArticleAccordionComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './technology-details-page.component.html',
  styleUrl: './technology-details-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TechnologyDetailsPageComponent {
  @ViewChild('content', {static: true}) content!: ElementRef<HTMLElement>;

  public article!: IArticle;
  public openedContentId!: string;

  constructor(
    private articlesService: ArticlesService,
    private renderer2: Renderer2,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef
  ) {
  }

  @Input()
  set id(id: string) {
    this.articlesService.getArticlesByType(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      this.article = res;
      this.openArticleChild(this.article);

      this.cdr.detectChanges();
    });
  }

  public openArticleChild(article: IArticle): void {
    this.renderer2.setProperty(this.content.nativeElement, 'innerHTML', article.body);
    this.openedContentId = article._id;
    this.cdr.detectChanges()
  }
}
