import {Component, DestroyRef, OnInit, Self} from '@angular/core';
import {TechnologiesService} from "../../services/technologies.service";
import {Observable} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {ITechnology} from "../../shared/interfaces/technologies.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public technologies$!: Observable<ITechnology[]>;

  constructor(
    private technologiesService: TechnologiesService,
    @Self() private destroyRef: DestroyRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}


  public ngOnInit(): void {
    this.technologies$ = this.technologiesService.getTechnologiesTypes().pipe(takeUntilDestroyed(this.destroyRef))
  }

  public openArticle(_id: string): void {
    this.router.navigate(['./details', _id], { relativeTo: this.activatedRoute });
  }
}
